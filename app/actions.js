'use server'

import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData) {
  const lastname = formData.get('lastname');
  const firstname = formData.get('firstname');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    // We use standard SQL syntax with $1, $2 placeholders for security
    const query = `
      INSERT INTO messages (lastname, firstname, email, subject, message)
      VALUES ($1, $2, $3, $4, $5)
    `;
    
    // Run the query using our local pool
    await pool.query(query, [lastname, firstname, email, subject, message]);
    
    revalidatePath('/');
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error('Database Error:', error);
    return { success: false, message: "Failed to send message." };
  }
}