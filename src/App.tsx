// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useState } from "react";

// import { publicRouter } from './router/routers'
function Test() {
  return (
    <a href="https://www.google.com/search?q=gg+d%E1%BB%8Bch&rlz=1C1GCEU_enVN1161VN1161&oq=gg&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg8IARBFGDkYgwEYsQMYgAQyBggCEEUYQDIGCAMQRRg7MgYIBBBFGDsyDQgFEAAYgwEYsQMYgAQyBggGEEUYPDIGCAcQRRg80gEIMTU3NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">Link </a>
  )
}

function App() {
  // const router = createBrowserRouter([...publicRouter]) 
  // state biến để lưu trữ giá trị khởi tạo có thể là bất kỳ kiểu dữ liệu nào từ number, string, arr, object, function, Component khác
  // Giá trị khởi tạo của state được đặt trong ngoặc của useState và chỉ dùng lần đầu khi component được mount ( render lần đầu ) -- re-render
  // setState - là 1 hàm dùng để cập nhật lại state mà nó quản lý
  // Hàm này không chạy luôn khi được gọi mà nó chạy sau khi component re-render

  // React sẽ không hiển thị với các điều kiện là false, null , undefined


  // component
  // 1 component chỉ trả về 1 element 
  // 1 component nhiệm vụ chính là render UI ( trả về phần trong return là 1 JSX ) gọi là effect
  // Các thành phần còn lại ( bên ngoài return ) gọi là sideEffect
  // Phải xác định được thành phần nào nên chạy trước và thành phần nào nên chạy sau effect

  const [state, setState] = useState(undefined)
  // nó vẫn chạy từ trên xuống dưới khi không có useEffect 
  // Khởi tạo state xong - render UI
  return (
    <>
      {/* <button onClick={() => setState(state + 1)}> Tăng</button> */}
      {state ? (
        <Test />
      ) : (
        <p>Đây không phải là 1</p>
      )}

      {state && <p> Hiển thị đây</p>}
    </>
  )
}

export default App
