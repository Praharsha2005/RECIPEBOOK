import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  return (
    <div><img src="/rb.png" className="card-img-top" alt="Recipe Book" style={{ height: '400px', width: '100%' }} />
     {/* <img src="/rb.png" class="img-fluid w-100 pt-1" alt="..."/ > */}
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/idli.jpg" className="card-img-top" alt="Idli" style={{ height: '400px', width: 'auto' }} />

      {/* <img src="/idli.jpg"/> */}
      <div class="card-body" >
        <h4 class="card-title">Idli</h4>
        <p class="card-text"><b>Ingredients:</b>
2 cups idli rice,
1 cup urad dal (black gram),
½ tsp fenugreek seeds,
Salt (to taste),
Water (as needed).<br></br>

<br></br><b>Steps:</b><br></br>
1.Soak: Soak rice and urad dal separately for 4-6 hours. Add fenugreek seeds to urad dal.<br></br>
2.Grind: Grind urad dal into a smooth batter. Grind rice coarsely. Mix both batters.<br></br>
3.Ferment: Add salt, mix well, and ferment for 8-12 hours.<br></br>
4.Steam: Pour batter into greased idli molds and steam for 10-15 minutes.<br></br>
5.Serve: Serve hot with chutney and sambar.<br></br>

</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/vada.jpg" className="card-img-top" alt="Vada" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/vada.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Vada</h4>
        <p class="card-text"><b>Ingredients:</b>
1 cup urad dal,
1 tsp black pepper,
1 tsp cumin seeds,
1 tbsp chopped curry leaves,
1 tbsp chopped green chilies,
Salt (to taste),
Oil (for frying).<br></br>



<br></br><b>Steps:</b><br></br>

1.Soak: Soak urad dal for 4 hours and drain.<br></br>
2.Grind: Grind to a thick, smooth batter using little water.<br></br>
3.Mix: Add pepper, cumin, curry leaves, chilies, and salt.<br></br>
4.Shape: Wet your hands, take a portion, and shape into a doughnut.<br></br>
5.Fry: Deep fry in hot oil until golden brown.<br></br>
6.Serve: Serve with coconut chutney and sambar.<br></br>


</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/poori.jpg" className="card-img-top" alt="Poori" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/poori.jpg" class="card-img-top" alt="..."/ > */}
      <div class="card-body">
        <h4 class="card-title">Poori</h4>
        <p class="card-text"><b>Ingredients:</b>

2 cups wheat flour,
½ tsp salt,
¾ cup water (as needed),
1 tbsp oil (for dough),
Oil (for frying).<br></br>

<br></br><b>Steps:</b><br></br>

1.Knead: Mix flour, salt, oil, and water to form a stiff dough. Rest for 15 minutes.<br></br>
2.Roll: Divide into small balls and roll into circles.<br></br>
3.Fry: Deep fry in hot oil until puffy and golden brown.<br></br>
4.Serve: Serve hot with potato curry.<br></br>

</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/bonda.png" className="card-img-top" alt="Bonda" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/bonda.png"/> */}
      <div class="card-body">
        <h4 class="card-title">Bonda</h4>
        <p class="card-text"><b>Ingredients:</b>

1 cup urad dal,
2 tbsp rice flour,
1 tbsp chopped green chilies,
1 tbsp chopped ginger,
1 tbsp curry leaves,
Salt (to taste),
Oil (for frying),<br></br>

<br></br><b>Steps:</b><br></br>

1.Soak: Soak urad dal for 3-4 hours and drain.<br></br>
2.Grind: Grind into a thick, smooth batter.<br></br>
3.Mix: Add rice flour, chilies, ginger, curry leaves, and salt.<br></br>
4.Shape: Take small portions and drop them in hot oil.
5.Fry: Fry until golden brown.<br></br>
6.Serve: Serve with coconut chutney.<br></br>

</p>
      </div>
    </div>
  </div>




  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/cc.jpg" className="card-img-top" alt="Chicken Curry" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/cc.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Chicken Curry</h4>
        <p class="card-text"><b>Ingredients:</b>

500g chicken (cut into pieces),
2 onions (finely chopped),
2 tomatoes (pureed),
2 tbsp ginger-garlic paste,
2 tbsp oil,
1 tsp cumin seeds,
1 tsp turmeric powder,
1 tbsp red chili powder,
1 tbsp coriander powder,
1 tsp garam masala,
1 cup water,
Salt (to taste),
Fresh coriander leaves (for garnish).<br></br>


<br></br><b>Steps:</b><br></br>

1.Heat oil in a pan, add cumin seeds and chopped onions, sauté until golden brown.<br></br>
2.Add ginger-garlic paste and sauté until raw smell disappears.<br></br>
3.Add tomato puree and cook until oil separates.<br></br>
4.Add turmeric, red chili powder, coriander powder, and salt. Mix well.<br></br>
5.Add chicken pieces and cook for 5 minutes on medium heat.<br></br>
6.Pour water, cover, and simmer for 20 minutes until chicken is tender.<br></br>
7.Add garam masala, mix well, and cook for another 2 minutes.<br></br>
8.Garnish with coriander leaves and serve hot with rice or roti.<br></br>
</p>
      </div>
    </div>
  </div>






  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/mc.jpg" className="card-img-top" alt="Mutton Curry" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/mc.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Mutton Curry</h4>
        <p class="card-text"><b>Ingredients:</b>

500g mutton (goat/lamb, cut into pieces),
2 onions (sliced),
2 tomatoes (pureed),
2 tbsp ginger-garlic paste,
2 tbsp oil,
1 tsp cumin seeds,
1 tsp turmeric powder,
1 tbsp red chili powder,
1 tbsp coriander powder,
1 tsp garam masala,
1 cup water,
Salt (to taste),
Fresh coriander leaves (for garnish).<br></br>


<br></br><b>Steps:</b><br></br>

1.Heat oil in a pressure cooker, add cumin seeds and onions, and sauté until golden brown.<br></br>
2.Add ginger-garlic paste and cook until fragrant.<br></br>
3.Add tomato puree, turmeric, red chili powder, coriander powder, and salt. Cook until oil separates.<br></br>
4.Add mutton pieces and mix well.<br></br>
5.Pour water, close the lid, and pressure cook for 5-6 whistles or until mutton is tender.<br></br>
6.Add garam masala, mix well, and cook for another 2 minutes.<br></br>
7.Garnish with coriander leaves and serve with rice or roti.<br></br>
</p>
      </div>
    </div>
  </div>





  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/fc.jpg" className="card-img-top" alt="Fish Curry" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/fc.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Fish Curry</h4>
        <p class="card-text"><b>Ingredients:</b>

500g fish (cut into pieces),
2 onions (finely chopped),
2 tomatoes (pureed),
2 tbsp ginger-garlic paste,
2 tbsp oil,
1 tsp mustard seeds,
1 tsp turmeric powder,
1 tbsp red chili powder,
1 tbsp coriander powder,
1 cup tamarind juice,
Salt (to taste),
Curry leaves (for flavor),
Fresh coriander leaves (for garnish).<br></br>


<br></br><b>Steps:</b><br></br>

1.Heat oil in a pan, add mustard seeds and curry leaves.<br></br>
2.Add onions and sauté until golden brown.<br></br>
3.Add ginger-garlic paste and cook until the raw smell disappears.<br></br>
4.Add tomato puree, turmeric, red chili powder, coriander powder, and salt. Cook until oil separates.<br></br>
5.Pour tamarind juice and bring to a boil.<br></br>
6.Add fish pieces and simmer for 10-15 minutes until cooked.<br></br>
7.Garnish with coriander leaves and serve hot with rice.<br></br>
</p>
      </div>
    </div>
  </div>



  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/cb.jpg" className="card-img-top" alt="Chicken Biryani" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/cb.jpg" /> */}
      <div class="card-body">
        <h4 class="card-title">Chicken Biryani</h4>
        <p class="card-text"><b>Ingredients:</b>

500g chicken (cut into pieces),
2 cups basmati rice (soaked for 30 minutes),
2 onions (sliced),
2 tomatoes (chopped),
2 tbsp ginger-garlic paste,
½ cup yogurt,
1 tsp turmeric powder,
1 tbsp red chili powder,
1 tbsp garam masala,
1 tsp cumin seeds,
1 bay leaf,
4 cloves, 2 cardamoms, 1 cinnamon stick,
4 cups water,
Salt (to taste),
Fresh coriander and mint leaves,
Saffron milk (optional),<br></br>

<br></br><b>Steps:</b><br></br>

1.Heat oil/ghee in a large pot, add cumin, bay leaf, cloves, cardamom, and cinnamon.<br></br>
2.Add onions and sauté until golden brown.<br></br>
3.Add ginger-garlic paste, chicken, turmeric, red chili powder, garam masala, and salt. Cook for 10 minutes.<br></br>
4.Add tomatoes and yogurt, cook until oil separates.<br></br>
5.Add soaked rice and water. Mix gently.<br></br>
6.Cover and cook on low heat for 20 minutes.<br></br>
7.Add saffron milk (optional), coriander, and mint leaves.<br></br>
8.Fluff up and serve hot with raita.<br></br>
</p>
    </div>
  </div>
  </div>




  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/vb.jpg" className="card-img-top" alt="Veg Biryani" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/vb.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Veg Biryani</h4>
        <p class="card-text"><b>Ingredients:</b>

2 cups basmati rice (soaked for 30 minutes),
1 cup mixed vegetables (carrot, beans, peas, potato),
2 onions (sliced),
2 tomatoes (chopped),
2 tbsp ginger-garlic paste,
½ cup yogurt,
1 tsp turmeric powder,
1 tbsp red chili powder,
1 tbsp garam masala,
1 tsp cumin seeds,
1 bay leaf,
4 cloves, 2 cardamoms, 1 cinnamon stick,
4 cups water,
Salt (to taste),
Fresh coriander and mint leaves,
Saffron milk (optional).<br></br>
<br></br><b>Steps:</b>

1.Heat oil/ghee in a large pot, add cumin, bay leaf, cloves, cardamom, and cinnamon.<br></br>
2.Add onions and sauté until golden brown.<br></br>
3.Add ginger-garlic paste, vegetables, turmeric, red chili powder, garam masala, and salt. Cook for 5 minutes.<br></br>
4.Add tomatoes and yogurt, cook until oil separates.<br></br>
5.Add soaked rice and water. Mix gently.<br></br>
6.Cover and cook on low heat for 20 minutes.<br></br>
7.Add saffron milk (optional), coriander, and mint leaves.<br></br>
8.Fluff up and serve hot with raita.</p>
      </div>
    </div>
  </div>



  <div class="col">
    <div class="card d-flex h-100 hover-effect">
    <img src="/pb.jpg" className="card-img-top" alt="Panner Biryani" style={{ height: '400px', width: 'auto' }} />
      {/* <img src="/pb.jpg"/> */}
      <div class="card-body">
        <h4 class="card-title">Panner Biryani</h4>
        <p class="card-text"><b>Ingredients:</b>
200g paneer (cubed),
2 cups basmati rice (soaked),
2 onions (sliced),
2 tomatoes (chopped),
1 tbsp ginger-garlic paste,
½ cup yogurt,
1 tsp turmeric powder,
1 tsp red chili powder,
1 tsp garam masala,
1 tbsp biryani masala,
2 tbsp ghee,
3 cups water,
Fresh coriander & mint leaves.<br></br>

<br></br><b>Steps:</b><br></br>
1.Heat ghee, fry onions until golden, and set some aside.<br></br>
2.Add ginger-garlic paste, sauté, then add tomatoes.<br></br>
3.Mix in paneer cubes and spices, cook for 5 minutes.<br></br>
4.Add yogurt and stir well.<br></br>
5.Add soaked rice, water, and biryani masala.<br></br>
6.Cover and cook for 15-20 minutes.<br></br>
7.Garnish with fried onions, coriander, and mint. Serve hot.</p><br></br>
      </div>
    </div>
  </div>



</div>
    </div>
  
  )
}

export default Home
