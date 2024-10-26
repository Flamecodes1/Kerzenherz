document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h2').innerText;
        alert(`${productName} wurde zum Warenkorb hinzugefügt!`);
    });
});
