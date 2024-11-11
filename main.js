/* 
1. This program will take an musical instrument as an input.
2. The valid options are: Drums, Bass, Guitar, Piano, Singer, Saxophone, Trumpet or Trombone.
3. Depending on the user input (instrument), the program will output a random name (of 10) of
a recommended artist to listen to.

For example:
User Input: Drums
Output: "We recommend you listen to Dennis Chambers"

Or

User Input: Basoon
Output: "Please enter a valid instrument"
*/

const drumsArr = ["Buddy Rich","Art Blakey","Gene Krupa","Max Roach","Elvin Jones",
    "Tony Williams","Philly Joe Jones","Roy Haynes","Jack DeJohnette","Brian Blade"];
const bassArr = ["Charles Mingus","Ray Brown","Paul Chambers","Ron Carter","Jaco Pastorius",
    "Scott LaFaro","Milt Hinton","Oscar Pettiford","Stanley Clarke","Christian McBride"];
const guitarArr = ["Wes Montgomery","Django Reinhadt","Joe Pass","Charlie Christian",
    "Pat Metheny","Jim Hall","John Scofield","George Benson","Grant Green","Kenny Burrell"];
const pianoArr = ["Art Tatum","Duke Ellington","Count Basie","Oscar Peterson","Bud Powell",
    "Thelonious Monk","Bill Evans","Herbie Hancock","Chick Corea","Keith Jarrett"];
const singerArr = ["Ella Fitzgerald","Frank Sinatra","Billie Holiday","Louis Armstrong",
    "Sarah Vaughan","Nina Simone","Nat King Cole","Chet Baker","Diana Krall","Carmen McRae"];
const saxArr = ["Charlie Parker","John Coltrane","Sonny Rollins","Lester Young","Coleman Hawkins",
    "Stan Getz","Wayne Shorter","Dexter Gordon","Cannonball Adderley","Ornette Coleman"];
const trumpetArr = ["Louis Armstrong","Miles Davis","Dizzy Gillespie","Clifford Brown",
    "Chet Baker","Freddie Hubbard","Lee Morgan","Wynton Marsalis","Roy Eldridge","Arturo Sandoval"];
const tromboneArr = ["J.J. Johnson","Tommy Dorsey","Jack Teagarden","Glenn Miller",
    "Kai Winding","Curtis Fuller","Frank Rosolino","Bill Watrous","Delfeayo Marsalis","Kid Ory"];