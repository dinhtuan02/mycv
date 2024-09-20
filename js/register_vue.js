var register = new Vue({
    el: '#app',
    data: {
      name: '',       // Biến lưu trữ thông điệp
      password:'',
      phone:'',
      address:'',
      outputMessage: ''  // Biến lưu trữ kết quả để hiển thị
    },
    methods: {
      checkRegister() {
        // Nếu thông điệp không rỗng, hiển thị nó
        if (this.name.trim()  !== '' &&  this.password.trim()  !== '' && this.phone.trim()  !== '' &&  this.address.trim()  !== '' ) {
          this.outputMessage = alert('Đăng ký tài khoản thành công');
        } else {
          this.outputMessage = alert('Bạn cần điền đầy đủ thông tin để đăng ký'); // Nếu 1 trong input rỗng, không hiển thị gì
        }
      }
    }
  })