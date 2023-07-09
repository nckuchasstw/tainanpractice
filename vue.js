const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
    
      search: '',
      postList: [
    
          {title:'「一首歌，一個時代」音樂會',url:'activity01.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
    
          {title:'「文學的聲音」專題演講',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'李育霖',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/414695747.jpg',data:"2023.4.19"},
         
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},

          {title:'「一首歌，一個時代」音樂會',url:'https://heyzine.com/flip-book/aa6f214064.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
        
      ]
    
      }
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())||
          post.author.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
   

      
    })
    
    
    
    app.mount("#app")

    var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})