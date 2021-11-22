# React Lesson I

Di materi kali ini kita akan membuat dua target berikut ini. Pertama, Kita akan membuat sebuah fungsi yang akan mengubah nama tampilan ketika tombol diklik. 
Mari kita pelajari cara kerjanya.

Menulis code untuk membuat bagian visual dari situs web dengan React sangat mirip dengan HTML. Namun, di React, ini disebut JSX, bukan HTML.

Menulis JSX hampir sama dengan menulis HTML. Anda dapat menggunakan tag yang benar-benar sama seperti HTML, seperti ```<h1>``` dan ```<h2>``` untuk judul atau ```<p>``` untuk paragraf, dan ```<div>``` untuk kolom dan container.

Meskipun JSX sangat mirip dengan HTML, ada beberapa perbedaan. Seperti yang ditunjukkan digambar sebelah kiri, beberapa element tidak dapat diletakkan didalam return. Jika Anda memiliki lebih dari satu element, gabungkan element-element tersebut ke dalam satu tag div seperti contoh dibawah ini.

Beberapa element dapat menyebabkan error!

```js
render(){
  return(
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
  )
}
```

Grupkan kedalam satu tag!

```js
render(){
  return(
    <div>
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
    </div>
  )
}
```

Ketika JSX diletakkan di antara simbol {/* dan */}, teks di dalamnya akan menjadi komentar. Komentar tidak akan ditampilkan di browser dan tidak akan mengubah hasil code Anda. Sebagian editor teks akan menunjukkan komentar dalam teks warna abu-abu.
  
Di HTML, tag img tidak memiliki tag penutup sehingga dapat ditulis seperti 
```php
  <img src='URL gambar'>. 
```
  Namun, tag penutup diperlukan oleh tag img didalam JSX seperti dibawah ini. ingatlah didalam JSX, tag img harus diakhir dengan /.
```php
  <img src='URL gambar' />. 
```

### Contoh penerapan
```js
  import React from 'react';

  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <p>Ayo belajar React bersama-sama!</p>
          {/* ini merupakan komentar */}
          <img src="https://user-images.githubusercontent.com/54503473/142431930-24f9b220-3546-4b48-af91-9860d0b0c774.png" />

        </div>
      );
    }
  }

  export default App;
```

## Perkenalan JSX

File App.js selalu memiliki element dan struktur yang ditunjukkan di bawah ini. Catatan: Jika Anda lupa akan inheritence atau class, Anda dapat selalu membuka https://www.w3schools.com/js/js_class_inheritance.asp untuk mereviewnya.

```js
import React from 'react'; //....................1
class App extends React.Component{ //............2
  render(){
    : //.........................................3
  }
}
export default App; //...........................4
```

1. Import React
2. Class akan menerima warisan dari React.Component
3. Definisikan method render yang mereturn JSX
4. Export class


### Contoh penerapan sederhana

```js
// Import React
import React from 'react';

// Nyatakan class App
class App extends React.Component{
  render() {
    return (
      <h1>Hello React</h1>
    );
  }
}

// Export class App 
export default App
```

Seperti yang dapat Anda lihat di bawah ini, area JSX dan JS (JavaScript) dibagi dengan jelas. JSX hanya ditulis di dalam return dari method render. Element JSX akan ditampilkan di browser.

```js
class App extends React.Component{
  render() {
    return (
      {/*Letakkan JSX disini*/};
    );
  }
}
```

JavaScript dapat ditulis di luar kolom return (tetapi tetap di dalam method render). Dalam contoh dibawah ini, constant text ditentukan dengan code JavaScript di method render.
  
```js
class App extends React.Component{
  render() {
    const text = 'Hello React'; //...Code JavaScript dapat diketik diluar return
    return (
      :  
    );
  }
}
```

Bahkan dikolom return, JavaScript dapat ditulis didalam JSX. Untuk melakukan ini, code JavaScript harus diletakkan didalam tanda kurung kurawal { }. Selain itu, nilai atribut tag juga dapat disisipkan kedalam JSX dengan tanda kurung kurawal { } (seperti contoh di sebelah kanan).
  
```js
render() {
  const imgUrl = 'https://---.png'; 
  return (
    <img src = {imgUrl} /> //...Letakkan code JavaScript didalam tanda kurung kurawal { }
  );
}
```

Kita telah melihat ketika JSX diletakkan di antara {/* dan */} maka JSX tersebut akan menjadi komentar (seperti contoh disebelah kiri). Namun, untuk JavaScript yang berada diluar return, membuat baris sebagai komentar harus dimulai dengan dua garis miring //, seperti contoh disebelah kanan.
  
```js
render() {
  // ini mer
  const imgUrl = 'https://---.png'; 
  return (
    <img src = {imgUrl} /> //...Letakkan code JavaScript didalam tanda kurung kurawal { }
  );
}
```

### Penerapan sederhana

```js
  import React from 'react';

  class App extends React.Component {
    render() {
      // Nyatakan constant name 
      const name = 'React JS';

      // Nyatakan constant imgUrl 
      const imgUrl = 'https://user-images.githubusercontent.com/54503473/142431930-24f9b220-3546-4b48-af91-9860d0b0c774.png'

      return (
        <div>
          {/* Gunakan constant name untuk menampilkan "React JS" */}
          <h1>{name}</h1>

          {/* Gunakan constant imgUrl untuk menampilkan gambar */}
          <img src = {imgUrl} />

        </div>
      );
    }
  }

  export default App;
```

## State & Event

Pertama, kita akan membuat beberapa tombol untuk ditekan. Tombol dapat dibuat dengan tag <button>. Semua kata yang diletakkan di tag <button> akan ditampilkan di tombol.

```js
  import React from 'react';

  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Halo, Ninja Ken!</h1>
          {/* Tambahkan tag <button> dengan teks "Kamu" */}
          <button>Guru Domba</button>

          {/* Tambahkan tag <button> dengan teks "Dia" */}
          <button>Ninja Ken</button>

        </div>
      );
    }
  }

  export default App;
```
          
Sekarang yang ingin kita lakukan adalah mengubah nama yang ditampilkan di teks, ketika tombol ditekan. Kita akan memicu beberapa aksi ketika sebuah tombol ditekan. Untuk ini, kita akan menggunakan alat pertama kita, event. 
Dengan event, Anda dapat menentukan kapan sebuah code akan dijalankan. Pada contoh di bawah ini, ketika tombol di klik, code akan dijalankan untuk membuat Ninja Ken melompat.
Dengan arrow function yang telah Anda pelajari di ES6 Study III, Anda dapat membuat perintah untuk hanya menjalankan code ketika suatu event terjadi, gunakan code berikut: eventName={() => { code }}. Karena arrow function adalah fungsi JavaScript, jangan lupa untuk mengapitnya dengan tanda kurung kurawal { }.
Kita dapat menggunakan event onClick untuk menjalankan code ketika element tertentu di klik. Nama untuk event ini sebaiknya adalah onClick. Contoh penulisan di element button adalah 

```js
<button onClick={() => {code}}>. 
```
  
Tulis code yang ingin dijalankan ketika event klik terjadi didalam tanda kurung kurawal { } (posisinya terletak dibagian {code} pada arrow function).
          
Untuk memastikan code berfungsi ketika sebuah tombol di klik, kita dapat menggunakan console.log(). Anda dapat mem-print pesan dengan console.log() di dalam arrow function untuk event onClick.

```js
  import React from 'react';

  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Halo, Kamu!</h1>
          {/* Tambahkan event onClick didalam tag button, yang berfungsi untuk mencetak nama di console */}
          <button onClick = {()=>{console.log('Guru Domba')}}>Kamu</button>

          {/* Tambahkan event onClick didalam tag button, yang berfungsi untuk mencetak nama di console */}
          <button onClick = {()=>{console.log('Ninja Ken')}}>Dia</button>

        </div>
      );
    }
  }

  export default App;
```
          
Agar dapat mengubah nama yang akan ditampilkan ketika menekan salah satu tombolnya, Anda harus menggunakan alat kedua, state.
Mari belajar tentang state...
Selanjutnya, mari kita ubah bagian name dari Hello, (name)! di dalam code sehingga ketika sebuah tombol ditekan, nama yang ditunjukkan di atas berubah. Di React, nilai yang dapat dirubah berdasarkan tindakan pengguna disebut state. Kita dapat memperbarui state setiap kali tombol ditekan, lalu mengubah nama yang akan ditampilkan berdasarkan state.
Untuk menggunakan state untuk mengubah apa yang ditampilkan, lakukan 3 langkah di sebelah kanan.
Sebelum dapat menggunakannya, Anda harus menentukan state terlebih dahulu (Langkah 1). Ini yang selanjutnya akan kita lakukan.

Sepertinya sulit, tetapi aku akan berusaha keras!
Aliran perubahan tampilan state : 
  1. Definisikan State
  2. Tampilkan State
  3. Update State

Object digunakan untuk mengelola beberapa nilai dengan property. State di React ditentukan dengan object.

  
```js
                {/*       Object     */}
  const user = { name : "Dia", age : 21};  // property : nilai
  
  console.log(user.age);    // untuk menampilkan nilai, ketik "ConstantName.propertyName"
```

          
State dibuat menggunakan sebuah object di constructor. Nilai awal state ditetapkan untuk object tersebut. Untuk bagian lain dari code seperti constructor(props) dan super(props);, ingat bahwa ini standar dan hampir selalu ditulis dengan cara yang sama.

```js
  
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {name : "Dia"};    // Ditetapkan sebagai object lalu ditetapkan ke this.state 
    }
  }
  
```
          
Berikutnya, kita akan lanjut ke cara menampilkan state yang baru saja dibuat.
Setelah ditentukan, Anda dapat mengakses state dengan menggunakan this.state. Seperti yang sudah kita pelajari, state akan disimpan sebagai object. Jadi, console.log(this.state) akan mem-print object state tersebut ke console.
Catatan: string akan di-print dengan tanda kutip ganda (" ")

Karena this.state adalah sebuah object, Anda bisa mendapatkan nilai property didalam object tersebut dengan menulis code seperti this.state.propertyName. Dicontoh di bawah, this.state.name akan mengembalikan nilai Ninja Ken, sehingga pesan Halo, Ninja Ken! akan ditampilkan pada browser, seperti gambar disebelah kanan.

```js
  import React from 'react';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: 'Kamu'};
    }

    render() {
      return (
        <div>
          {/* Tulis ulang bagian nama dari "Halo, Kamu!" dengan menggunakan state */}
          <h1>Halo,{this.state.name}!</h1>

          <button onClick={() => {console.log('Kamu')}}>Kamu</button>
          <button onClick={() => {console.log('Dia')}}>Dia</button>
        </div>
      );
    }
  }

  export default App;
```
  
Untuk langkah terakhir, kita akan belajar cara memperbarui state. Ini berarti mengubah apa yang ditampilkan setiap kali state diperbarui.
Untuk mengubah nama setiap kali tombol diklik, kita akan menggabungkan pembaruan state dan event onClick.
Dengan code ```php this.setState({propertyName: valueToUpdate})```, nilai state untuk property yang ditentukan akan berubah. Ini artinya nilai yang dapat ditampilkan dengan this.state.name juga dapat diubah. Untuk mengubah nama yang ditampilkan ketika sebuah tombol diklik, kita akan meletakkan setState di dalam method event onClick, seperti yang ditunjukkan dibawah ini.
          
```js
  <h1>Halo, {this.state.name}!</h1>
  
  <button onClick={() => {this.setState({name : 'Kamu'})}}>
  Kamu</button>

  <button onClick={() => {this.setState({name : 'Dia'})}}>
  Dia</button>

```

Di React, Anda tidak dapat mengubah nilai state dengan menetapkannya langsung ke state. Jika Anda ingin mengubah nilai di state, Anda harus menggunakan method setState. Hal ini penting untuk diingat ketika ingin memperbarui state.

```js
  import React from 'react';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: 'Kamu'};
    }

    render() {
      return (
        <div>
          <h1>Halo, {this.state.name}!</h1>
          {/* Ubah state untuk event onClick */}
          <button onClick={() => {this.setState({name : 'Kamu'})}}>
          Kamu</button>

          {/* Ubah state untuk event onClick */}
          <button onClick={() => {this.setState({name : 'Dia'})}}>
          Dia</button>

        </div>
      );
    }
  }

  export default App;

```
          
Terakhir, mari kita buat method untuk mengubah nama yang ditampilkan ketika tombol diklik. 
          
Seperti yang telah kita bahas di Studi ES6 IV, method ditentukan di class. Code untuk menentukan method adalah methodName() { code }. Method memiliki tanda kurung kurawal { } seperti function.
          
```js
  class className{
    constructor(){
      :
    }
    methodName(){
      // code yang akan dijalankan
    }
  }
```
          
Kita akan membuat sebuah method handleClick yang dapat mengubah nilai property name di state. Tentukan method handleClick dan tambahkan code untuk mengubah state.

```js
  class App extends React.Component{
    handleClick(){
      // code disini akan dirubah
      // nilai property name di state
    }
    :
  }
```

Method juga dapat dipanggil dengan menggunakan event. Code ```php onClick={() => {this.methodName()}}``` akan menjalankan method dengan nama methodName (bisa nama apa saja) di file App.js ketika component this (element yang berisi method itu sendiri) diklik.

```js
render() {
      return (
          <button onClick={() => {this.handleClick('Kamu')}}>Kamu</button>    // gunakan "this" ketika memanggil sebuah method didalam App.js (file saat ini)
      );
    }
     
```
  
Di sini, Anda akan belajar cara meneruskan argument ke method. Pertama, method handleClick harus mengambil argument bernama name. Selanjutnya, teruskan argument tersebut ke code dimanahandleClick tersebut dipanggil. Terakhir, gunakan argument name untuk mengubah nilai property name di state.
          

```js
  class App extends React.Component{
    handleClick(data){
      this.setState({name : data})    // Gunakan argument data untuk merubah nilai property name di state
    }
    :
  }
```


```js

  <button onClick={() => {this.handleClick('Kamu')}}>Kamu</button>  //nilai dari dalam handleClick akan dikirim sebagai parameter

  <button onClick={() => {this.handleClick('Dia')}}>Dia</button>    //nilai dari dalam handleClick akan dikirim sebagai parameter
```

### Contoh penereapannya
  
```js
  
  import React from 'react';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: 'Kamu'};
    }

    // Nyatakan method handleClick 
    handleClick(name){
      this.setState({name : name});
    }

    render() {
      return (
        <div>
          <h1>Hello, {this.state.name}!</h1>
          <button onClick={() => {this.handleClick('Kamu')}}>Kamu</button>
          <button onClick={() => {this.handleClick('Dia')}}>Dia</button>

        </div>
      );
    }
  }

  export default App;

```
