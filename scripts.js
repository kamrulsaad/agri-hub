document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Set modal content
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalMessage').textContent = message;

    // Show modal
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();
});