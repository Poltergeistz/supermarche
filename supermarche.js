 var Produit = function(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }

  /*var baguette = {
      nom = 'Baguette',
      prix = 0.85
  }

  var croissant = {
      nom = 'Croissant',
      prix = 0.80
  }

  var choco = new Produit()
  choco.prix = 1;
  */
  
  var baguette = new Produit( 'Baguette', 0.85); // prix HT
  var croissant = new Produit( 'Croissant', 0.80);
  
  console.log(baguette)
  console.log(croissant)

// Prototype Viennoiserie avec des valeurs de base 

Viennoiserie.prototype = new Produit();
Viennoiserie.prototype.constructor = Viennoiserie;
Viennoiserie.prototype.prix = 0.80;
Viennoiserie.prototype.frais = true;

// constructeur Viennoiserie
function Viennoiserie(nom, prix, frais){
    this.nom = nom;
    this.prix = prix;
    this.frais = frais;
}

var cookie = new Viennoiserie('cookie');
cookie.frais = true;
cookie.prix = 1;
console.log(cookie);
var donut = new Viennoiserie('donut');
donut.prix = 1.5;
donut.frais = true;
console.log(donut);
var brownie = new Viennoiserie('brownie')
brownie.prix = 1.5;
brownie.frais = true;
console.log(brownie);

  function panier(){
      this.cart = [];
    // this.nombreProduits = cart.length
    this.totalHT += Produit.prix;
    this.totalTTC = Produit.prix * 0.055;
    this.ajoute = function(produit){
        this.cart.push(Produit);
    }
    this.retire = function(produit){
        this.cart.shift(Produit) 
    }
    this.totalHT = 0;
    this.totalTTC = 0;
    console.log(totalHT)
    console.log(totalTTC)
  }

  
  var panier1 = new Panier(Produit, totalHT, totalTTC);
  panier.ajoute(baguette);
  console.log("baguette",panier);
  panier.ajoute(croissant);
  
  
  console.log(panier.totalHT);
  console.log(panier.totalTTC);