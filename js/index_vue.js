var index = new Vue({
    el: '#app',
    data: {
      ten: '',       // Biến lưu trữ thông điệp
      email:'',
      soNguoi:'',
      Sdt:'',
      outputMessage: ''  // Biến lưu trữ kết quả để hiển thị
    },
    methods: {
      checkMessage() {
        // Nếu thông điệp không rỗng, hiển thị nó
        if (this.ten.trim()  !== '' &&  this.email.trim()  !== '' && this.soNguoi.trim()  !== '' && this.Sdt.trim()  !== '') {
          alert("Đặt bàn thành công. Tin nhắn đã được gửi đến bộ phận xử lí của cửa hàng.")
          // this.outputMessage = 'Cảm ơn bạn đã gửi tin nhắn. Tin nhắn đã được gửi đến bộ phận xử lí của cửa hàng.';
        } else {
          alert("Bạn cần điền đầy đủ thông tin để đặt bàn")
          //this.outputMessage = 'Bạn cần điền đầy đủ thông tin để đặt bàn'; // Nếu 1 trong input rỗng, không hiển thị gì
        }
      }
    }
  })
