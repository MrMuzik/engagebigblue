this is the Contact page

<form name="netlify-form-example" method="POST" action="/contact/success" data-netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="form-name" value="netlify-form-example" />
    <label for="name">Name</label>
    <input name="name" id="name" required placeholder="Name" type="text" />
    <label for="email">Email</label>
    <input name="email" id="email" required placeholder="Email" type="email" />
    <label for="message">Message</label>
    <input name="message" id="message" required placeholder="Message" type="text" />
    <input type="submit" value="Submit" />
</form>