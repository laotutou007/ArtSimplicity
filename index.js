new Vue({
    el: '#app', 
    data:{
        title:'你好',
        p:'欢迎来到您家居和艺术的灵感来源！迷失在我们的精选美学世界吧!',
        end:'© 2023 汇聚家居&艺术灵感 ',
        iterms:[
            {text:'Collect',link:'./artist.html'},
            {text:'Art',link:'./art.html'},
            {text:'Blog',link:'./blog.html'},
            {text:'Login',link:'./login.html'},
        ],
        imgs:[
           '../imgs/c.jpg',
           '../imgs/c1.jpg',
           '../imgs/c2.jpg',
           '../imgs/c3.jpg',
           '../imgs/takemyhand.jpg'
        ],
        imgs2:[
            '../imgs/1.jpg',
            '../imgs/6.jpg',
            '../imgs/5.jpg',
            '../imgs/4.jpg',
        ],
        img3:'../imgs/3.jpg',
        img33:'../homeimgs/13.jpg.png',
        img4:[
            '../img3/23.png',
            '../homeimgs/18.jpg.png',
            '../homeimgs/20.jpg',
            '../img3/30.png',
        ],
        endhelp:[
            
            {text:'关于',link:'./about.html'},
            {text:'作品',link:'./single.html'},
            {text:'帮助',link:'./help.html'},
            {text:'活动',link:'./callus.html'},
            {text:'客户',link:'./user.html'},
        ],
        img3s:[
            '../img3/27.png',
            '../img3/26.png',
            '../img3/28.png',
            '../img3/23.png',
            '../img3/24.png',
            '../img3/29.png',
            '../img3/30.png',
            '../img3/19.png',
            '../img3/16.jpg.png',

        ],
        artcontent:[
            '../imgs/6.jpg',
            '../imgs/5.jpg',
            '../imgs/22.jpg',
            '../imgs/1.jpg',
            '../imgs/4.jpg',
            '../imgs/8.jpg',
        ],
        activeIndex: '1',
        currentDate: new Date(),
        activeNames: ['1'],
        value: new Date(),
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }],
        // value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
       
    },
     methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        
  },
  onSubmit() {
    console.log('submit!');
  },
  handleChange(val) {
    console.log(val);
  }

}
  })