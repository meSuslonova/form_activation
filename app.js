document.getElementById('phone').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    let formatted = '';
    if (input.length > 0) {
        formatted += '(' + input.substring(0, 3);
    }
    if (input.length > 3) {
        formatted += ') ' + input.substring(3, 6);
    }
    if (input.length > 6) {
        formatted += '-' + input.substring(6, 8);
    }
    if (input.length > 8) {
        formatted += '-' + input.substring(8, 10);
    }
    e.target.value = formatted;
});

$(document).ready(function () {
    var input = document.querySelector("#phone");
    var iti = window.intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "node_modules/intl-tel-input/build/js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
        preferredCountries: ["us", "gb"]
    });

    $('#country-selector').click(function () {
        var countryCode = iti.getSelectedCountryData().dialCode;
        $('#country-code').val(countryCode);
        alert("Selected country code: " + countryCode);
    });

    document.getElementById("help").addEventListener("change", function () {
        var label = document.querySelector('label[for="help"]');
        if (this.checked) {
            label.classList.add('checked-label');
        } else {
            label.classList.remove('checked-label');
        }
    });

    document.getElementById("promo").addEventListener("change", function () {
        var label = document.querySelector('label[for="promo"]');
        if (this.checked) {
            label.classList.add('checked-label');
        } else {
            label.classList.remove('checked-label');
        }
    });

    var roleDropdown = document.getElementById("role-dropdown");
    var roleInput = document.getElementById("role");
    var arrowIcon = document.getElementById("arrow-icon");
    var isDropdownVisible = false; // переменная для отслеживания состояния меню

    var roleInput = $("#role");
    var isDropdownVisible = false; // переменная для отслеживания состояния меню

    $("#arrow-icon").click(function () {
        var roleDropdown = $("#role-dropdown");
        if (isDropdownVisible) {
            roleDropdown.removeClass("show-dropdown");
            isDropdownVisible = false;
        } else {
            roleDropdown.addClass("show-dropdown");
            isDropdownVisible = true;
        }
    });

    $("#role-dropdown").click("li", function (e) {
        var selectedRole = $(e.target).text();
        roleInput.val(selectedRole);
        $("#role-dropdown").removeClass("show-dropdown");
        isDropdownVisible = false;
    });


});

document.addEventListener('DOMContentLoaded', function () {
    var myForm = document.getElementById('myForm');
    if (myForm) {
        myForm.addEventListener('submit', function (event) {
            event.preventDefault(); // чтобы отменить обычное поведение формы
            window.location.href = 'новая_страница.html';
        });
    }
});

document.getElementById('promo').addEventListener('change', function () {
    var promoInput = document.getElementById('promo-input');
    if (this.checked) {
        promoInput.style.display = 'block';
        promoInput.focus(); // При отображении input устанавливаем фокус на него
    } else {
        promoInput.style.display = 'none';
    }
});
