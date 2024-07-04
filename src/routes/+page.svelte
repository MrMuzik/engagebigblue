<script>
    async function submitForm(event) {
      event.preventDefault();
      const form = event.target;
  
      const data = new FormData(form);
      const object = {};
      data.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: json
        });
  
        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Form submission failed.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during form submission.');
      }
    }
</script>
<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form name="contact" method="POST" data-netlify="true" action="/" onsubmit="submitForm(event)">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Your Role: 
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
