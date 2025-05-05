<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const russianHeart = document.querySelector('.russian-heart');</p>
<p class="p1">const ukrainianHeart = document.querySelector('.ukrainian-heart');</p>
<p class="p2"><br></p>
<p class="p1">function moveHearts() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const containerWidth = document.querySelector('.heart-container').offsetWidth;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const heartWidth = 50; // Taille des coeurs</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Position initiale du coeur ukrainien (à droite)</p>
<p class="p1"><span class="Apple-converted-space">    </span>ukrainianHeart.style.left = `${containerWidth - heartWidth}px`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Animation pour rapprocher les coeurs</p>
<p class="p1"><span class="Apple-converted-space">    </span>let distance = containerWidth - (heartWidth * 2); // Distance entre les coeurs</p>
<p class="p1"><span class="Apple-converted-space">    </span>let speed = 0.5; // Vitesse de l'animation</p>
<p class="p1"><span class="Apple-converted-space">    </span>let position = containerWidth - heartWidth;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>function animate() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>position -= speed;</p>
<p class="p1"><span class="Apple-converted-space">        </span>ukrainianHeart.style.left = `${position}px`;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>// Arrêter l'animation quand les coeurs se touchent</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (position &lt;= heartWidth) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>clearInterval(animationInterval);</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const animationInterval = setInterval(animate, 20); // Mettre à jour toutes les 20ms</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">moveHearts(); // Lancer l'animation</p>
</body>
</html>
