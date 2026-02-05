import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono<{ Bindings: Env }>();

const LeadSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zipCode: z.string().length(5),
    householdIncome: z.string().min(1),
    healthStatus: z.string().min(1),
    dateOfBirth: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10),
    consentGiven: z.boolean(),
});

app.post(
    "/api/leads",
    zValidator("json", LeadSchema),
    async (c) => {
        const data = c.req.valid("json");
        const { DB } = c.env;

        try {
            if (!DB) {
                throw new Error("Database binding 'DB' not found");
            }

            await DB.prepare(`
        INSERT INTO leads (
          first_name, last_name, address, city, state, zip_code,
          household_income, health_status, date_of_birth,
          email, phone, consent_given
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `)
                .bind(
                    data.firstName,
                    data.lastName,
                    data.address,
                    data.city,
                    data.state,
                    data.zipCode,
                    data.householdIncome,
                    data.healthStatus,
                    data.dateOfBirth,
                    data.email,
                    data.phone,
                    data.consentGiven ? 1 : 0
                )
                .run();

            return c.json({ success: true, message: "Lead saved successfully" }, 201);
        } catch (error) {
            console.error("Database error:", error);
            return c.json({ success: false, message: "Failed to save lead", error: String(error) }, 500);
        }
    }
);

export default app;
