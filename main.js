/********************************************************************/
/* ### Banner SlideShow ### */
/* ### Banner SlideShow ### */
/********************************************************************/
const mainBannerJS = document.querySelector('.mainBannerJS');

let currentIndex = 0
const slideShow = () => {
    currentIndex = (currentIndex + 1) % 3;
    if (currentIndex === 0) {
        mainBannerJS.classList.add("mainBannerContainer1");
        mainBannerJS.classList.remove("mainBannerContainer2");
        mainBannerJS.classList.remove("mainBannerContainer3");
    } else if (currentIndex === 1) {
        mainBannerJS.classList.add("mainBannerContainer2");
        mainBannerJS.classList.remove("mainBannerContainer1");
        mainBannerJS.classList.remove("mainBannerContainer3");
    } else if (currentIndex === 2) {
        mainBannerJS.classList.add("mainBannerContainer3");
        mainBannerJS.classList.remove("mainBannerContainer1");
        mainBannerJS.classList.remove("mainBannerContainer2");
    };
};
setInterval(slideShow, 4500)


/********************************************************************/
/* ### Click To Scroll ### */
/* ### Click To Scroll ### */
/********************************************************************/
const servicos = document.querySelector('.servicos');
const servicesContainer = document.querySelector(".whiteFadeIn");

const HoverAna = document.querySelector('.HoverAna');

const HoverGabriele = document.querySelector('.HoverGabriele');
const scrollAna = document.querySelector('.scrollAna');

const HoverHenrique = document.querySelector('.HoverHenrique');
const scrollGabriele = document.querySelector('.scrollGabriele');

const HoverLarissa = document.querySelector('.HoverLarissa');
const scrollHenrique = document.querySelector('.scrollHenrique');

HoverAna.addEventListener('click', () => {
    partners.scrollIntoView({ behavior : 'smooth' });
});

HoverGabriele.addEventListener('click', () => {
    scrollAna.scrollIntoView({ behavior: 'smooth' });
});

HoverHenrique.addEventListener('click', () => {
    scrollGabriele.scrollIntoView({ behavior: 'smooth' });
});

HoverLarissa.addEventListener('click', () => {
    scrollHenrique.scrollIntoView({ behavior: 'smooth' });
});

servicos.addEventListener('click', () => {
    servicesContainer.scrollIntoView({ behavior: 'smooth' });
});

const hoverCri = document.querySelector('.hoverCri');
const hoverInv = document.querySelector('.hoverInv');
const hoverApo = document.querySelector('.hoverApo');

hoverCri.addEventListener('click', () => {
    hideServiceSubCard()
    hardCodeCloseAllSubCard()
    showHenriqueImg()
    crimiCard.classList.remove('hide');
    crimiCard.classList.add('show');
    servicesContainer.scrollIntoView({ behavior: 'smooth' });
});

hoverInv.addEventListener('click', () => {
    hideServiceSubCard()
    hardCodeCloseAllSubCard()
    showHenriqueImg()
    invCard.classList.remove('hide');
    invCard.classList.add('show');
    servicesContainer.scrollIntoView({ behavior: 'smooth' });
});

hoverApo.addEventListener('click', () => {
    hideServiceSubCard()
    hardCodeCloseAllSubCard()
    showHenriqueImg()
    apoCard.classList.remove('hide');
    apoCard.classList.add('show');
    servicesContainer.scrollIntoView({ behavior: 'smooth' });
});

/********************************************************************/
const quemSomos = document.querySelector('.quemSomos');
const partners = document.querySelector('.btnNextLarissa');

quemSomos.addEventListener('click', () => {
    partners.scrollIntoView({ behavior : 'smooth' });
});

/********************************************************************/
const localizacao = document.querySelector('.localizacao');
const footerContainer = document.querySelector('.footerSubContainer');

localizacao.addEventListener('click', () => {
    footerContainer.scrollIntoView({ behavior: 'smooth' });
});


/********************************************************************/
/* ### Img Hover ### */
/* ### Img Hover ### */
/********************************************************************/
const henriqueDiv = document.querySelector('.henriqueDiv');
const anaDiv = document.querySelector('.anaDiv');
const gabrieleDiv  = document.querySelector('.gabrieleDiv ');
const larissaDiv = document.querySelector('.larissaDiv');

const jsImgSkillHenrique = document.querySelector('.jsImgSkillHenrique');
const jsImgSkillAna = document.querySelector('.jsImgSkillAna');
const jsImgSkillGabriele = document.querySelector('.jsImgSkillGabriele');
const jsImgSkillLarissa = document.querySelector('.jsImgSkillLarissa');

henriqueDiv.addEventListener('mouseenter', () => {
    showHenriqueImg()
});
anaDiv.addEventListener('mouseenter', () => {
    showAnaImg()
});
gabrieleDiv.addEventListener('mouseenter', () => {
    showGabrieleImg()
});
larissaDiv.addEventListener('mouseenter', () => {
    showLarissaImg()
});

const showHenriqueImg = () => {
    jsImgSkillHenrique.classList.remove('hide')
    jsImgSkillHenrique.classList.add('show')

    jsImgSkillAna.classList.remove('show')
    jsImgSkillAna.classList.add('hide')

    jsImgSkillGabriele.classList.remove('show')
    jsImgSkillGabriele.classList.add('hide')
    
    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')
}
const showAnaImg = () => {
    jsImgSkillHenrique.classList.remove('show')
    jsImgSkillHenrique.classList.add('hide')

    jsImgSkillAna.classList.remove('hide')
    jsImgSkillAna.classList.add('show')

    jsImgSkillGabriele.classList.remove('show')
    jsImgSkillGabriele.classList.add('hide')
    
    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')

    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')
}
const showGabrieleImg = () => {
    jsImgSkillHenrique.classList.remove('show')
    jsImgSkillHenrique.classList.add('hide')

    jsImgSkillAna.classList.remove('show')
    jsImgSkillAna.classList.add('hide')

    jsImgSkillGabriele.classList.remove('hide')
    jsImgSkillGabriele.classList.add('show')
    
    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')

    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')
}
const showLarissaImg = () => {
    jsImgSkillHenrique.classList.remove('show')
    jsImgSkillHenrique.classList.add('hide')

    jsImgSkillAna.classList.remove('show')
    jsImgSkillAna.classList.add('hide')

    jsImgSkillGabriele.classList.remove('show')
    jsImgSkillGabriele.classList.add('hide')
    
    jsImgSkillLarissa.classList.remove('show')
    jsImgSkillLarissa.classList.add('hide')

    jsImgSkillLarissa.classList.remove('hide')
    jsImgSkillLarissa.classList.add('show')
}
/********************************************************************/
/* ### Skills Card ### */
/* ### Skills Card ### */
/********************************************************************/
const hideAllSkillCard = document.querySelector('.hideAllSkillCard');
const serviceSubCard = document.querySelectorAll('.serviceSubCard');

const skillGoBack = document.querySelectorAll('.skillGoBack');

const btnCrimi = document.querySelector('.btnCrimi');
const crimiCard = document.querySelector('.crimiCard');


const btnInv = document.querySelector('.btnInv');
const invCard = document.querySelector('.invCard');


const btnApo = document.querySelector('.btnApo');
const apoCard = document.querySelector('.apoCard');

/********************* BTN GO BACK **********************************/

skillGoBack.forEach(element => {
    element.addEventListener('click', () => {
        showServiceSubCard();
        hardCodeCloseAllSubCard();
    });
});

/********************* BTN GO BACK **********************************/

btnCrimi.addEventListener('click', () => {
    hideServiceSubCard();
    crimiCard.classList.remove('hide');
    crimiCard.classList.add('show');
});
/* btnInv.addEventListener('click', () => {
    hideServiceSubCard();
    invCard.classList.remove('hide');
    invCard.classList.add('show');
}); */
/* btnApo.addEventListener('click', () => {
    hideServiceSubCard();
    apoCard.classList.remove('hide');
    apoCard.classList.add('show');
}); */

const hideServiceSubCard = () => {
    serviceSubCard[0].classList.add('hide')
    serviceSubCard[0].classList.remove('show')
    serviceSubCard[1].classList.add('hide')
    serviceSubCard[1].classList.remove('show')
    hideAllSkillCard.classList.remove('hide')
    hideAllSkillCard.classList.add('show')
};

const showServiceSubCard = () => {
    serviceSubCard[0].classList.remove('hide')
    serviceSubCard[0].classList.add('show')
    serviceSubCard[1].classList.remove('hide')
    serviceSubCard[1].classList.add('show')
    hideAllSkillCard.classList.remove('show')
    hideAllSkillCard.classList.add('hide')
};

const hardCodeCloseAllSubCard = () => {
    crimiCard.classList.remove('show')
    crimiCard.classList.add('hide')

    invCard.classList.remove('show')
    invCard.classList.add('hide')

    apoCard.classList.remove('show')
    apoCard.classList.add('hide')
};



/********************************************************************/
/* ### Mobile CloseLinks ### */
/* ### Mobile CloseLinks ### */
/********************************************************************/
const linksMobile = document.querySelector('.linksMobile');
const showLinksMobile = document.querySelector('.showLinksMobile');
const closeMobileLinks = document.querySelector('.closeMobileLinks');
const links = document.querySelector('.links');
const peticoesButton = document.querySelector('.peticoesButton');
const iconsHeader = document.querySelector('.iconsHeader');


linksMobile.addEventListener('click', function() {
    showLinksMobile.style.top = '0px';
});

closeMobileLinks.addEventListener('click', () => {
    showLinksMobile.style.top = "-500px";
});