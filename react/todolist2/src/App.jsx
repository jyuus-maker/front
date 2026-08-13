import './App.css'
import { createContext, useContext,  useReducer } from 'react'


const CarContext = createContext();

const PRODUCTS = [
  {id:0, name:"커피",    price:4500},
  {id:1, name:"샌드위치", price:6000},
  {id:2, name:"커피",    price:2500}
]

//리듀서
function cartReducer(state, action) {
  switch(action.type){
    case "ADD_ITEM" : { 
      const existing = state.items.find((item)=>item.id === action.payload.id);
      if (existing){
        return { items: state.items.map((item)=>item.id === action.payload.id ? {...item, qty:item.qty+1} : item)}
      }
      //새상품
      return {items : [...state.items, {...action.payload, qty: 1}]}
    };
    case "REMOVE_ITEM": return { items: state.items.filter((item)=> item.id !== action.payload.id) };
    case "CLEAR_CART" : return { items: [] };
    default : return state;
  }
}

//커스텀훅(사용자훅) -유즈카트
function useCart(){
  const context = useContext(CarContext);
  if(!context){
    throw new Error('useCart는 CartProvider 컴포넌트 안에서만 사용 가능')
  }
  return context;
}

function CartProvider({children}){
  const [state, dispatch] = useReducer(cartReducer, {items:[]});
  const addItem = (product) => dispatch({type:"ADD_ITEM",    payload : product});
  const removeItem = (id)   => dispatch({type:"REMOVE_ITEM", payload : {id}   });
  const clearCart = ()      => dispatch({type:"CLEAR_CART"});

  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = state.items.reduce((sum, item) => sum + item.qty, 0);

  const value = {state, addItem, removeItem, clearCart, totalPrice, totalCount}
  return <CarContext.Provider value={value}> {children} </CarContext.Provider>;
}


function Header(){
  //장바구니 상품 개수
  const {totalCount} = useCart();
  return (
    <header>
      <h3>장바구니 : {totalCount} 개</h3>
    </header>
  )
}

function ProductList(){
  //Context로부터 (추가할 아이템) 데이터 제공받아서
  const {addItem} = useCart();
  return (
    <div>
      <h3>상품 목록</h3>
      {/* 상품배열.map */}
      {PRODUCTS.map((product)=>
            <div key={product.id}>
              {product.name} - {product.price.toLocaleString()}원
              <button onClick={()=>addItem(product)}> 담기 </button>
            </div>)
       }
    </div>
  )
}

function CartSummary(){
  //장바구니 상품 갯수
  const {state, removeItem, clearCart, totalPrice, totalCount} = useCart();
  return (
    <div>
      <h4>장바구니 : {totalCount} 개</h4>
      {state.items.length === 0 && <p>장바구니가 비어있습니다.</p>}
      {/* map */}
      {state.items.map((item)=>(
        <div key={item.id}>
          {item.name} × {item.qty}
          <button onClick={()=>removeItem(item.id)}>삭제</button>
        </div>
      ))}
      <p>
        <h4>총 금액 : {totalPrice.toLocaleString()}원</h4>
        <button onClick={clearCart}>전체 비우기</button>
      </p>
      <div></div>
    </div>
  )
}

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <ProductList />
        <CartSummary />
      </CartProvider>
    </div>
  )
}

export default App;