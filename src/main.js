import './style.css'
import { loadHeader } from './commoncomponents/header.js'
import { loadNavbar } from './commoncomponents/navbar.js'
import { loadFooter } from './commoncomponents/footer.js'
import { loadFinalFooter } from './commoncomponents/finalFooter.js'

// Insert header
document.getElementById('header').innerHTML = loadHeader()



//Insert navbar
document.getElementById("navbar").innerHTML=loadNavbar()

// Insert footer
document.getElementById("footer").innerHTML=loadFooter()

document.getElementById("finalFooter").innerHTML=loadFinalFooter()



