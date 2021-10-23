/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const getUl= document.getElementById("navbar__list");
const getSections=document.querySelectorAll('section');
let newAnchor ,  newli, newlitParent  , dataNavValue   ,   btnTop;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 
/** This function used in building  nav bar 
 * by creating list items and anchors ***/
function BuildingNavigationBar()
{
  console.log(getSections);  // to test SectionS object
  /****************/
    for(let i=0;i<getSections.length;i++)
  {
    /****** Create unorderd List items *******/
    newli=document.createElement('li');
    newli.setAttribute('class',".navbar__menu li");  
    newlitParent=document.querySelector("ul");
    // newlitParent.className="navbar__menu ul"
    //    Append List itemes to Unorderd List
    newlitParent.appendChild(newli);
    
    /****** Create Links *******/
    newAnchor=document.createElement('a');      
    newAnchor.textContent=getSections[i].getAttribute("data-nav");
    newAnchor.setAttribute('id',getSections[i].getAttribute("data-nav"));
    let newAnchorParent=document.getElementsByTagName("li");
    newAnchor.className= ("menu__link");
    //    Append Anchors to List itemes respectivly
    newAnchorParent[i].appendChild(newAnchor);
  }
return ;
}

/*** This function for setting section active class 
 *    whene section name is clicked in Navbar  */
function activeSection(){
  for (let i=0 ; i<newli.length; i++)
  {
      newli[i].addEventListener('click',function(){
      dataNavValue=newAnchor[i].textContent;      
      getSections.forEach(element=> {
        if(element.getAttribute('data-nav') === dataNavValue)  
        {
          //   Check Point
          console.log(element.getAttribute('data-nav'),dataNavValue,newAnchor[i]);
          
           //set the secation active
          element.classList.add("your-active-class");    
          document.getElementById(dataNavValue).classList.add("your-active-Link") ;
          let viewSection=document.querySelector('.your-active-class');
          let viewAnchor=document.querySelector('.your-active-Link');
          //   Check Point
          console.log(viewSection ,viewAnchor); 

                /*  here we will adjust how to view clicked Section */
          viewSection.scrollIntoView({behavior:"smooth", block: "end", inline: "nearest"});     // scroll smoothly  
        } 
        else
        {        
           //set the secation inactive
          element.classList.remove("your-active-class"); 
          document.getElementById(dataNavValue).classList.remove("your-active-Link") ;
        }
        return;
      });
    });
  } 
}

function toTop(){
  btnTop.addEventListener('click',window.scrollTo({top: 0, behavior: "smooth"}))
  //<button onclick='window.scrollTo({top: 0, behavior: "smooth"});'>Scroll to Top</button>
;}

function ScrollingOverSections(){
  getSections.forEach(Sec =>{
    const sectionRectTop=Math.floor(Sec.getBoundingClientRect().top);
   /*
    ** Now comparing Section top with viewport
    ** sectionRectTop is compared with 2 accepted values 
    ** values could be 0->450  ,-150->250 , -200->200    
    ** according to my favourite final view
    */
    if(sectionRectTop>0 && sectionRectTop<270)
    {
      //      Setting Active Class
      Sec.classList.add('your-active-class');
      dataNavValue=Sec.getAttribute('data-nav');
      //      Setting Active Anchor   
      document.getElementById(dataNavValue).classList.add("your-active-Link") ;
    }
    else
    {
      //      Setting NonActive classes
      Sec.classList.remove('your-active-class');
      dataNavValue=Sec.getAttribute('data-nav');
      //      Setting NonActive Anchors
      document.getElementById(dataNavValue).classList.remove("your-active-Link") ;
    }
  });
}
  
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the Navigation bar
/******/
/** CRITERIA--1   : Navigation **/
BuildingNavigationBar();

newli=document.querySelectorAll('li');
newAnchor=document.querySelectorAll('a');
/** CRITERIA--2   : Section Active State **/

activeSection();                           
/** CRITERIA--3  : Scroll to Anchor **/
ScrollingOverSections();
window.addEventListener('scroll',ScrollingOverSections);



/**********  Creating 'TOP' Button to return to the of page */
/*btnTop=document.createElement('button');
btnTop.textContent="Top"; 
let getmain=document.querySelector('main').appendChild(btnTop);


btnTop.addEventListener('click',window.scrollTo({top: 0, behavior: "smooth"}))
*/



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
