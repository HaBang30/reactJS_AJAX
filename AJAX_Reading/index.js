

//  use a function to make parameter other function, it is called callback; but have many callback which is making the deveper hard in code, that is called callback hell 
// (callback nhiều làm rối code và khó khăn trong debug);
// from the problems above of callback, we have promise, the promise to resolve the callback problem:
// (từ những vấn đề của callback, chúng ta có promise, nó dùng để giải quyết vấn đề của callback);
// However, when we use promise, it will apear many keywords then, it make code untidy (tangled) and hard in debug, the promise problems, we have async/await to resolve all the promise problems:

// Example1: Promise.......async/await:

// let promise = new Promise ((resolve, reject) =>{
//     let a = 10;
//     if (a % 2 === 0){
//         resolve(a);
//     } else {
//         reject(a);
//     }
// });

// // Code Promise:
// // Code async/await:
// async function checkEven() {
//     try {
//         const res = await promise;
//         console.log(res);
//     } catch (e) {
//         console.error("Error is ", e);
//     }
// };

// checkEven();

                // =========   AJAX =======

            // axios.get('/user?ID=12345')
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });

            // axios.post('/users', {
            //     firstName: 'First name',
            //     lastName: 'Last name'
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });


// wire code with Jquery
            // const url = "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js"
            // $(document).ready(function() {
            //     $("#load-data").click(function() {
            //         $.ajax ({
            //             method: 'get',
            //             url: "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js"
            //         }).done(function(res) {
            //             console.log(res);
            //             document.getElementById("result").innerHTML = res.map(item => `<li>${item.data} </li>`).join('');
            //         })
            //     })
            // })



            // fetch('https://jsonplaceholder.typicode.com/todos/1')
            // .then(response => response.json())
            // .then(name => console.log(name))



            // fetch('https://jsonplaceholder.typicode.com/posts', {
            // method: 'POST',
            // body: JSON.stringify({
            // title: 'foo',
            // body: 'bar',
            // userId: 1
            // }),
            // headers: {
            // "Content-type": "application/json; charset=UTF-8"
            // }
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))


// If it has a button:
            // document.getElementById("load-data").addEventListener('click', function(){
            // fetch('https://jsonplaceholder.typicode.com/posts', {
            // method: 'POST',
            // body: JSON.stringify({
            // title: 'foo',
            // body: 'bar',
            // userId: 1
            // }),
            // headers: {
            // "Content-type": "application/json; charset=UTF-8"
            // }
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(err => console.error("Error: ", err))
            // });

// Fetch API trong JavaScript là một API mạnh mẽ cho phép bạn gửi và nhận dữ liệu từ một URL. Nó hỗ trợ gửi và nhận dữ liệu dạng GET hoặc POST, và có thể gửi và nhận dữ liệu dạng JSON hoặc dạng dữ liệu khác. Fetch API có thể sử dụng để tải dữ liệu từ một API, hoặc gửi dữ liệu đến một API.
// Fetch API cung cấp một cách để xử lý các phản hồi từ một yêu cầu mạng và có thể sử dụng để xử lý các lỗi mạng. Nó hỗ trợ tải dữ liệu bằng cách sử dụng Promises để cho phép bạn xử lý dữ liệu sau khi nó được tải xong.
// Các bài viết liên quan:
// API là gì?
// Facebook API
// React Component API
// Xử lý, phân tích và trực quan hóa dữ liệu
// Kiểm tra lỗ hổng bảo mật Improper Error Handling
// Fetch API là một tùy chọn tốt hơn so với XMLHttpRequest, vì nó hỗ trợ Promises và cung cấp một cách dễ dàng hơn để gửi và nhận dữ liệu từ một URL.

// Tóm tắt nội dung
// Tại sao nên sử dụng Fetch API ?
// Dễ dàng sử dụng: Fetch API cung cấp cách dễ dàng và đơn giản để gửi và nhận dữ liệu từ một URL, với cú pháp đơn giản và dễ hiểu.
// Hỗ trợ Promises: Fetch API sử dụng Promises để cho phép bạn xử lý dữ liệu sau khi nó được tải xong, 
// giúp cho việc xử lý dữ liệu trở nên dễ dàng hơn.
// Hỗ trợ tải dữ liệu với nhiều định dạng: Fetch API hỗ trợ tải dữ liệu dạng JSON hoặc dạng dữ liệu khác,
// giúp cho việc xử lý dữ liệu trở nên linh hoạt hơn.
// Hỗ trợ gửi và nhận dữ liệu với nhiều phương thức: Fetch API hỗ trợ gửi và nhận dữ liệu dạng GET hoặc POST, 
// giúp cho việc xử lý dữ liệu trở nên linh hoạt hơn.
// Hỗ trợ xử lý lỗi mạng: Fetch API hỗ trợ xử lý các lỗi mạng, giúp cho việc xử lý dữ liệu trở nên an toàn hơn.
// Fetch API còn hỗ trợ khả năng chỉnh sửa request và response bằng cách sử dụng các headers và các tham số khác. 
// Nó còn hỗ trợ việc cancel một request bằng cách sử dụng AbortController. Nó cũng hỗ trợ việc cache request và response.

// Fetch API còn hỗ trợ việc sử dụng trên nhiều trình duyệt và hỗ trợ cho cả các ứng dụng di động và Web trên các thiết bị khác nhau.
// Tất cả các ưu điểm đó giúp cho việc sử dụng Fetch API trong javascript trở nên linh hoạt, dễ dàng và an toàn hơn,
// giúp cho việc xử lý dữ liệu từ mạng trở nên hiệu quả hơn.

// Cách sử dụng Fetch API trong JavaScript ?
// Sử dụng Fetch API trong JavaScript là rất đơn giản, bạn chỉ cần sử dụng hàm fetch() với một URL làm tham số.

// Ví dụ:
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //   .then(response => response.json())
        //   .then(data => console.log(data))
// Trong ví dụ trên, hàm fetch() được gọi với URL ‘https://jsonplaceholder.typicode.com/todos/1’ là tham số và trả về một Promise. 
//Promise trả về một đối tượng Response,
// bạn có thể sử dụng hàm json() để chuyển đổi dữ liệu trả về thành dữ liệu JSON và xử lý dữ liệu đó.
// Bạn cũng có thể thêm các tham số khác như method, headers, body… để chỉnh sửa request khi sử dụng fetch.

        // document.getElementById("load-data").addEventListener('click', function(){
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        // method: 'POST',
        // body: JSON.stringify({
        // title: 'foo',
        // body: 'bar',
        // userId: 1
        // }),
        // headers: {
        // "Content-type": "application/json; charset=UTF-8"
        // }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => console.error("Error: ", err))
        // });

// Trong ví dụ này, chúng ta đang gửi một request POST tới địa chỉ ‘https://jsonplaceholder.typicode.com/posts’ với các tham số là method, body và headers.
// Các bạn có thể tìm hiểu thêm về các tham số khác của Fetch API để tùy chỉnh request và xử lý dữ liệu trả về một cách hiệu quả hơn.


// Những lưu ý khi sử dụng  Fetch API ? 
// Kiểm tra kết nối mạng: Trước khi sử dụng Fetch API, bạn nên kiểm tra kết nối mạng của người dùng để tránh trường hợp gửi request khi không có kết nối mạng.
// Xử lý lỗi mạng: Khi sử dụng Fetch API, bạn nên xử lý các lỗi mạng có thể xảy ra như lỗi kết nối, lỗi server… để tránh trường hợp gặp lỗi trong quá trình sử dụng.
// Sử dụng try-catch: Bạn nên sử dụng try-catch để xử lý các lỗi có thể xảy ra trong quá trình sử dụng Fetch API.
// Sử dụng AbortController: Nếu bạn muốn hủy một request đang chạy, bạn có thể sử dụng AbortController để hủy request.
// Sử dụng cache: Bạn nên sử dụng cache để tăng tốc độ và tiết kiệm bandwidth, tránh trường hợp gửi nhiều request trùng lặp đến server.
// Sử dụng https khi gửi dữ liệu quan trọng: Dữ liệu quan trọng nên được gửi qua giao thức https để bảo mật dữ liệu truyền đi.
// Xử lý response từ server: Khi nhận được response từ server, bạn nên kiểm tra trạng thái của response (status code) để xác định request có thành công hay thất bại.
// Sử dụng async/await: Bạn có thể sử dụng async/await để xử lý Fetch API, giúp cho việc xử lý dữ liệu trở nên dễ dàng hơn.
// Sử dụng dữ liệu mẫu: Trong quá trình phát triển, bạn nên sử dụng dữ liệu mẫu để kiểm tra và xử lý dữ liệu trước khi sử dụng dữ liệu thật.
// Sử dụng thư viện: Bạn có thể sử dụng các thư viện như axios, superagent, isomorphic-fetch để sử dụng Fetch API, điều này sẽ giúp bạn tiết kiệm thời gian và cải tiến tính năng của Fetch API. Nhưng cũng cần lưu ý là sử dụng các thư viện này sẽ tăng kích thước của code và có thể gây khó khăn cho việc debug.
// Các ví dụ thường sử dụng Fetch API trong JavaScript ?
// Ví dụ 1: Lấy dữ liệu từ một API

// JavaScript- fetch:
        // const url = "https://jsonplaceholder.typicode.com/todos/1";
        // fetch(url)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => console.error("Error: ", err));

// wirte code fetch to use async/await:
//const url = "https://jsonplaceholder.typicode.com/todos/1";
        // async function fetchUrl() {
        //     const url = "https://jsonplaceholder.typicode.com/todos/1";
        //     try{
        //         let response = await fetch(url);
        //         let data = await response.json();
        //         console.log("This is my data: ", data)
        //     } catch(err) {
        //         console.error("Error: ", err)
        //     }
        // }
        // fetchUrl();

// Ví dụ 2: Gửi dữ liệu lên một API
        document.getElementById("load-data").addEventListener('click', function(){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
        }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error("Error: ", err))
        });

    

//Ví dụ 3: Sử dụng async/await
        // async function getData() {
        // try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         const data = await response.json()
        //         console.log(data)
        // } catch (error) {
        //         console.log(error)
        // }
        // }
        // getData()


// Ví dụ 4: Sử dụng AbortController(); // cancel request by abortController
        // const controller = new AbortController()
        // const signal = controller.signal
        // fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))
        //     setTimeout(() => controller.abort(), 5000)


        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://jsonplaceholder.typicode.com/todos/1', {signal})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error =>console.log(error));
            setTimeout(() => controller.abort(),5000);
// Trong các ví dụ trên, chúng ta đã sử dụng Fetch API để lấy dữ liệu từ API, gửi dữ liệu lên API, sử dụng async/await, 
// và hủy request bằng AbortController. Các bạn có thể tham khảo và tùy chỉnh theo nhu cầu của mình.

// Kết luận 
// Fetch API là một công cụ mạnh mẽ trong JavaScript, cho phép bạn gửi và nhận dữ liệu từ một API dễ dàng. 
// Nó cung cấp một cách đơn giản và tiện lợi để xử lý dữ liệu từ mạng, cùng với việc hỗ trợ async/await và AbortController.
// Trong quá trình sử dụng Fetch API, cần lưu ý về việc kiểm tra kết nối mạng, xử lý lỗi mạng, sử dụng try-catch, 
// sử dụng cache, sử dụng https khi gửi dữ liệu quan trọng, xử lý response từ server, sử dụng thư viện và sử dụng dữ liệu mẫu.



// =======  AXIOS   =========
        

    // The way 1: 
    //   const url = 'https://github.com/cdnjs/api-server/blob/master/.eslintrc.cjs';
    //   axios.get(url).then(response => console.log("This is data: ", response.data));

    // The way 2: If use interceptors:
        // const url = 'https://jsonplaceholder.typicode.com/todos/1';
        // axios.interceptors.response.use(function(response) {
        //     return response.data
        // }, function(error) {
        //     return promise.reject(error)
        // });
        // axios.get(url).then(data => console.log("This is my data: ", data));
      

    // The way 3: convert interceptors by async/await:
    // const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
    // async function fetchUrl() {
    //     try {
    //         let response = await fetch(url);
    //         let data = await response.json();
    //         console.log(data);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    // fetchUrl();