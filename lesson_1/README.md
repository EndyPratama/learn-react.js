# React Lesson I

Di materi kali ini kita akan membuat dua target berikut ini. Pertama, Kita akan membuat sebuah fungsi yang akan mengubah nama tampilan ketika tombol diklik. 
Mari kita pelajari cara kerjanya.

Menulis code untuk membuat bagian visual dari situs web dengan React sangat mirip dengan HTML. Namun, di React, ini disebut JSX, bukan HTML.

Menulis JSX hampir sama dengan menulis HTML. Anda dapat menggunakan tag yang benar-benar sama seperti HTML, seperti ```<h1>``` dan ```<h2>``` untuk judul atau ```<p>``` untuk paragraf, dan ```<div>``` untuk kolom dan container.

Meskipun JSX sangat mirip dengan HTML, ada beberapa perbedaan. Seperti yang ditunjukkan digambar sebelah kiri, beberapa element tidak dapat diletakkan didalam return. Jika Anda memiliki lebih dari satu element, gabungkan element-element tersebut ke dalam satu tag div seperti contoh disebelah kanan.

<a href="https://github.com/endy-gigih-pratama">
  <img height="200em" src="https://user-images.githubusercontent.com/54503473/142291738-87e97d59-0d68-4917-b50b-45ec277956e9.png"/>
  <img height="200em" src="https://user-images.githubusercontent.com/54503473/142291956-73104ef8-6e13-4104-8ef0-e97d30f30d72.png"/>
</a>
<br><br>

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
