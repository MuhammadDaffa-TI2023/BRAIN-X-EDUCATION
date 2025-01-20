document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const fullName = document.getElementById('nama').value.trim();
    const address = document.getElementById('alamat').value.trim();
    const birthPlaceDate = document.getElementById('ttl').value.trim();
    const gender = document.getElementById('gender').value;
    const rombel = document.getElementById('rombel').value;
    const parentName = document.getElementById('nama_ortu').value.trim();
    const phoneNumber = document.getElementById('telepon').value.trim();
  

    if (!fullName || !address || !birthPlaceDate || !gender || !rombel || !parentName || !phoneNumber) {
      alert('Harap isi semua kolom form!');
      return;
    }
  
    
    const phoneRegex = /^[0-9]{10,13}$/; 
    if (!phoneRegex.test(phoneNumber)) {
      alert('Nomor telepon tidak valid! Masukkan nomor yang benar (10-13 digit).');
      return;
    }
  
    
    const whatsappMessage = `Assalamu'alaikum, saya ingin mendaftarkan anak saya dengan biodata dibawah ini,%0A` +
      `Nama Lengkap: ${fullName}%0A` +
      `Alamat: ${address}%0A` +
      `Tempat Tanggal Lahir: ${birthPlaceDate}%0A` +
      `Jenis Kelamin: ${gender}%0A` +
      `Rombel: ${rombel}%0A` +
      `Nama Orang Tua: ${parentName}%0A` +
      `No Telepon: ${phoneNumber}`;
  
    const whatsappNumber = '6285183211859';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
    
    window.open(whatsappURL, '_blank');

    setTimeout(() => {
        window.location.href = 'konfirmasi.html';
      }, 2000);
  });
  