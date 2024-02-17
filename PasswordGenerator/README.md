useCallback is a react hook that lets you cache a function defination between rerender. Ye function ko memorise karta hai.

const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){ str += "0123456789"}
    if(character){ str += "!@#$%^&*()_+{}[]~`"}
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }
    setPassword(pass)
  },
    [length,number,character,setPassword])    Jo jo chiz pe reuse ho sakta hai wo pass kiya hai


UseEffect -> jab bhi page reload hoga ya jo bhi dependecies me kuch bhi changes ho ga functio run ho jayega.

useEffect(() => {
      passwordGenerator()
    }, [length,number, character,passwordGenerator])


The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.


const passwordRef = useRef(null)


ref ={passwordRef} // jo component ka ref cahiye


const passwordClipboard = useCallback( () => {
    passwordRef.current?.select();//use
    passwordRef.current?.setSelectionRange(0, 99); //use
    window.navigator.clipboard.writeText(password)
  }, [password])


