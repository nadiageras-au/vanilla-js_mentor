//Task1 call
// const a = {
//     name: 'a',
//     getName() {
//         console.log(this.name)
//     }
// }
// const b = {
//     name: 'b'
// }
// const c = {
//     name: 'c'
// }
//
// a.getName()
//
// a.getName()
//     .bind(b)
//     .call(c)
//
// a.getName()
// a.getName.call(b)

// //Task2
// this.name = 'GLOBAL'
//
// const a = {
//     name: 'a',
//
//     go: function () {
//         console.log('this in go ',this.name)
//     },
//
//     run: () => {
//         console.log('this in run ',this.name)
//     },
//
//     stop: function () {
//         (()=>{
//             console.log('this in stop ',this.name)
//         }).bind({name: 'bind'})()
//     }
// }
//
// a.go()
// a.run()
// a.stop()

// //Task3
// const user = {
//     name: 'Nadia',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const foo = (cb) => {
//     cb()
// }
//
// foo(user.showName)

//------Task4 // разобрал Илья
// const user = {
//     name: 'Nadia',
//     showName() {
//         console.log(this.name)
//     }
// }
//
//setTimeout(user.showName, 1000)
//
//setTimeout(()=>user.showName(), 1000)
//setTimeout(user.showName.bind(user), 1000)

// //task5 React
//  class Header extends React.Component {
//
//         state = {
//             count: 0
//         }
//
//         onClick()
//         {
//             this.setState({
//                 count: this.state.count++
//             })
//         }
//
//         render() {
//             return (
//                 <Avatar onClick={onClick.bind(this)}/>
//             )
//         }
// }
//
// const Avatar =({onClick})=>{
//     return (
//         <div onClick={onClick}></div>
//     )
// }

