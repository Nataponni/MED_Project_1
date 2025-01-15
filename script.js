document.addEventListener('DOMContentLoaded', function() {
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(function(item) {
            const quantity = parseFloat(item.querySelector('.quantity').value) || 0;
            const price = parseFloat(item.getAttribute('data-price')) || 0;
            total += quantity * price;
        });
        document.getElementById('total').value = total.toFixed(2) + ' Euro';
    }

    document.querySelectorAll('.quantity').forEach(function(input) {
        input.addEventListener('input', calculateTotal);
    });

    calculateTotal();
});
