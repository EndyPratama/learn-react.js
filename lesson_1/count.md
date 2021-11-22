# Fitur Counter

Use 3 state steps to create a counter feature. First, we will complete Step one: Define State and Step two: Display State.

[Indonesia] Gunakan 3 langkah state untuk membuat fitur counter. Pertama, kita akan menyelesaikan Langkah pertama: Tentukan State dan Langkah kedua: Tampilkan State.
          
Step 1 : 

```js
  constructor(props){
    super(props){
      this.state = {count : 0};   // int
    }
  }
```

Step 2 :

```js
  render(){
    return(
      <div>
        <h1>
          {this.state.count}
        </h1>
        <button>+</button>
      </div>
    );
  }
```
Let's move on to Step three: Update State. In this step, we will create a method to call the method, where when the plus (+) button is clicked, the method will add 1 to the count value in that state. By adding 1 to the count value in the state, make sure the number shown also increases.

[Indonesia] Mari kita lanjut ke Langkah ketiga: Perbarui State. Di langkah ini, kita akan membuat method untuk memanggil method, dimana ketika tombol plus (+) di klik, method tersebut akan menambahkan 1 ke nilai count di state tersebut. Dengan menambahkan 1 pada nilai count di state, pastikan angka yang ditampilkan juga bertambah.
          
```js
  handleClick(){
    this.setState({count : this.state.count + 1});
  }

```

Finally, the handleClick method and the plus (+) button must be linked so that the handleClick method can be called each time the button is clicked. The full implementation is like this.

[Indonesia] Terakhir, method handleClick dan tombol plus (+) harus dihubungkan sehingga method handleClick bisa dipanggil setiap kali tombol di klik. Penerapan penuhnya seperti ini.

```js
  import React from 'react';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }

    // Buat method handleClick
    handleClick(){
      this.setState({count : this.state.count + 1});
    }

    render() {
      return (
        <div>
          <h1>
            {this.state.count}
          </h1>
          {/* tambahkan event onClick di tag <button> */}
          <button onClick = {()=>{this.handleClick()}}>+</button>

        </div>
      );
    }
  }

  export default App;

```
