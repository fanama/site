<div id="def">
    <h3>definition</h3>
<p>Le perceptron est un algorithme d'apprentissage supervisé de classifieurs binaires Il s'agit d'un neurone formel muni d'une règle d'apprentissage qui permet de déterminer automatiquement les poids synaptiques de manière à séparer un problème d'apprentissage supervisé</p>
</div>

---

>|tab||||
>|---------|:----:|----------:|------:|
>|notation|valeur|description|formule|
>|i|indice|indice parcourant N|$\forall i \in N $|
>|X | inputs|liste données entrées par l'utilisateur dans le perceptron|[X_0 ... X_i]|
>|W | poids|liste de poids associé à chaque input de X| \forall i \in R,W_i + = Err * X_i|
>|y | somme|résultat de la somme calculé par le perceptron|y=\sum{X_i*W_i}|
>|Out|Output |valeur  désirée|Out \in  {0,1}|
>|Err|erreur|C'est la différence entre la valeur désirée et le résultat calculé|<Latex>$Err=out-y$</Latex>|

---

###fonctions IA

---

####- train
>Pour pouvoir utiliser un perceptron il est necessaire de l'entrainer. On utilise pour cela une base de fait que l'on va charger dans le perceptron. c'est la liste *X*. cette base de fait est ensuite passée dans la fonction *train()*. 
>Cette fonction va calculer le resultat de chaque entrée grace à la fonction *guess()* puis comparer le resultat avec la sordie désirée et  modifier la valeur des poids *Wi* correspondant aux *Xi* tel que $W_i+=X_i*Err*o(1)

---

####- sum
> Cette fonction va faire le produit scalaire entre les entrées et les poids: \forall i \in N, y=\begin{pmatrix} X_0 & \cdots & X_i \end{pmatrix}.\begin{pmatrix} W_0 & \cdots & W_i \end{pmatrix}=\sum{X_i*W_i}

---

####- guess
>*guess()* va retourner un la somme resultantes des entrées et des sorties. elle passe cette somme dans une fonction *activation()* et retourne un resultat qui sera soit retouné à l'utilisateur soit renvoyé à *train()*

---

###-activation
>c'est tune condition d'activation elle renvoie un résultat qui dépend du résultat de la somme

---

#exemple

*Perceptron*
```
class Perceptron {
  constructor() {

    
    this.weights = [];
    
    this.lr=0.1;

    this.weights.push(Math.random())
    this.weights.push(Math.random())
        
  }
  
  activation(n){
    //n est le résultat de la somme des poids
    //on passe ce résultat dans une fonction d'activation pour obtenir le résultat final
    if(n>0){return 1}else{return -1}
    
  }

  sum(inputs) {
    let res = 0;
      for (var i in this.weights){
         res += inputs[i] * this.weights[i] 
      }
    return res
  }


  train(inputs) {
    for(var i in inputs){
      //on récupère les inputs et output désirés
      var d = inputs[i].input
      var out = inputs[i].out
      //console.log(d,out)
      
      var res = this.gess(d)//on calcule le resultat devinépar la machine
      
      
      var err = out-res  //on calcule l'erreur
      
      for(var t in this.weights){
        //on ajuste les poids
        //on ajoute le produit de l'erreur par l'input correspondant 
        //s'il n'y a pas d'erreur il ne change pas sinon  on ajoute l'erreur
        this.weights[t] += err * d[t] *this.lr;
      }
      
      //console.log(`err =`,err)
      
      
    }

  }

  gess(inputs) {
    //on retourne le réqultat deviné par la machine
    return this.activation(this.sum(inputs))
  }
}


```
---

*sketch.js*

```
let p;

var training_data  = [
                      {input:[1,1],out:1},
                      {input:[-1,-1],out:-1},
                      {input:[1,-1],out:-1},
                      {input:[-1,1],out:-1},
                      {input:[2,4],out:1},
                      {input:[-2,4],out:1},
                      {input:[5,-5],out:-1}
                     ]
//training {input:[x,y], out:res}
var input = [0,-125]
            //[x,y]

function setup() {
  createCanvas(400, 400);
  p = new Perceptron();
  p.train(training_data)//entrainement
  //console.log(p.weights)
  //console.log(p.gess(input))//renvoie le reultat deviné par le bot
 
  if(p.gess(input)>0){
    console.log("le point est en haut")
  }else{
    console.log("le point est en bas")
  }
}


```
---