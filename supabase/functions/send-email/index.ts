import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    // Get EmailJS secrets from Supabase
    const emailjsPublicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')
    const emailjsServiceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const emailjsTemplateId = Deno.env.get('EMAILJS_TEMPLATE_ID')

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      throw new Error('EmailJS configuration not found')
    }

    // Prepare EmailJS payload
    const emailData = {
      service_id: emailjsServiceId,
      template_id: emailjsTemplateId,
      user_id: emailjsPublicKey,
      template_params: {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'amnaasif320@gmail.com'
      }
    }

    // Send email via EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})