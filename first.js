console.log("Merhaba Javascript")

//console.log("Bu bir yorum satırıdır")


/*
console.log("Bunu gösterme")
console.log("Bunu da gösterme")
*/


//______________DEĞİŞKEN OLUŞTURMA__________


const isim = "Canberk ";     // string değişken türü tipindeki değerleri tutar 
let soyisim ;
let tire ;

//const isim = bu şekide tanımlama const için yapılamaz.bir başlangıç (intinal) değeri girilmesi zorunludur.

soyisim = "Yilmaz";
const bosluk ="-";

// isim = "Yeni İsim" const ön ekiyle oluşturulan değişkenlere tektar yeni değeri tanımlanması yapılamaz!

const tamisim = isim + "-" + soyisim + "-" + isim + tire + soyisim;

// soyisim  "yeni soyad" buradaki soyisim değeri console de güncellenmeyecektır.

console.log (tamisim);


const number1  = 5 ; // number
const number2 = 10 ;
const number3 = "4"; // artık bu bir string  


const calculate = number2 * number1  ; // çarpma işlemi (sonuç 50)
const calculate2 = number2 / number1 ; // bölme işmmi (sonuç 2)
const calculate3 = number2 + number1 ; // toplama işlemi (sonuç 15)
const calculate4 = number2 - number1 ; // bölme işlemi (sonuç 5)
const calculate5 = 30 * 2;

const calculate6_string = number2 + number3 ; //number 3 değişkeni string tipinde olduğu için çıktısı 104 şeklinde olur.Yani number2 ve number 3 yan yana yazar.
const calculate6 = number2 + Number(number3) ; //number3 string değişkenini number tipindeki bir değişkenine çevirdığımiz için artik matematiksel olarak toplar ve 14 değerindeki görebiliriz.

const stringNumber = number1 .toString() ; 
const calculateStringNumber = stringNumber + number2 ;

console.log(calculate);     
console.log(calculate2);
console.log(calculate3);
console.log(calculate4);
console.log(calculate5);
console.log(calculate6);
console.log(calculateStringNumber);

//const newVarible = number2 + number3;

const newVarible = number2 + "-" + number3 ;
console.log(newVarible);



//---------------DEĞİŞKEN TİPLERE DEVAM-----------


/*const sayi1 = 5;
const say2 = 10;
const say3 = 15;
const say4 = 20; 
const say5 = 25;     */

const sayilar = [5,10,15,20,25]; // array (liste tipi değişlen)
const ilksayi = sayilar [0] // bir arraydaki herhangi bir elemana erişmek için [] operatörü kullanılır.
// ilk eleman 0. index e sahiptır . Yani [0] yazarsak ilk elemanı elde etmiş oluruz.


console.log(sayilar);
console.log("sayilar arrayinin eleman sayisi:",sayilar.length);
console.log("array in ilk elemani ",ilksayi);
console.log("array in ikinci elemani",sayilar[1]);
console.log("son eleman:",sayilar[5]);

const elemanSayisi = sayilar.length //6
const sonEleman = sayilar[elemanSayisi -1]; 
console.log("sonEleman:",sonEleman);

// 5 number tipinde oluşan array oluşturulup  ilk ve son elemanlar çarpılarak console yazdırılacak.

const sayilar2 = [10,20,30,40,50];
const elemansayisi = sayilar2.length ;
const ilksayi2 = sayilar2[0] ;
const sonsayi2 = sayilar2[elemanSayisi-1] ;

console.log(ilksayi2*sonsayi2)









