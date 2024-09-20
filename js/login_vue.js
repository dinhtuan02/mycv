var login = new Vue({
    el: '#app',
    data: {
      name: '',       // Biến lưu trữ thông điệp
      password:'',
      outputMessage: ''  // Biến lưu trữ kết quả để hiển thị
    },
    methods: {
      checkLogin() {
        // Nếu thông điệp không rỗng, hiển thị nó
        if (this.name.trim()  !== '' &&  this.password.trim()  !== '' ) {
          this.outputMessage = alert('Đăng nhập thành công');
        } else {
          this.outputMessage = alert('Bạn cần điền đầy đủ thông tin.'); // Nếu 1 trong input rỗng, không hiển thị gì
        }
      }
    }
  })