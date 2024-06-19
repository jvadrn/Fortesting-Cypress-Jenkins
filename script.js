document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nik = document.getElementById('nik');
    const phone = document.getElementById('phone');
    
    let isValid = true;
  
    // Validasi Nama
    if (!/^[a-zA-Z ]{3,25}$/.test(name.value)) {
      isValid = false;
      document.getElementById('nameError').textContent = 'Nama hanya boleh alfabet, minimal 3 huruf, maksimal 25 huruf.';
    } else {
      document.getElementById('nameError').textContent = '';
    }
  
    // Validasi Email
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.value)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Email harus valid (@gmail.com).';
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    // Validasi NIK
    if (!/^[0-9]{1,16}$/.test(nik.value)) {
      isValid = false;
      document.getElementById('nikError').textContent = 'NIK hanya boleh angka, maksimal 16 digit.';
    } else {
      document.getElementById('nikError').textContent = '';
    }
  
    // Validasi Nomor Telpon
    // if (!/^[0-9]{9,15}$/.test(phone.value)) {
    //   isValid = false;
    //   document.getElementById('phoneError').textContent = 'Nomor telpon hanya boleh angka, minimal 9 digit, maksimal 15 digit.';
    // } else {
    //   document.getElementById('phoneError').textContent = '';
    // }
  
    if (isValid) {
      const formData = {
        name: name.value,
        email: email.value,
        nik: nik.value,
        phone: phone.value
      };
  
      displayResult(formData);
    }
  });
  
  function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h3>Data yang Diterima:</h3>
      <p><strong>Nama:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>NIK:</strong> ${data.nik}</p>
      <p><strong>Nomor Telpon:</strong> ${data.phone}</p>
    `;
  }
  