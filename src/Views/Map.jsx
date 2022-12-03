import { useEffect, useState } from "react";

import "./Map.css";
import image from "../assets/map.jpg";
import Point from "../components/Point";
export default function Map() {
  return (
    <div
      style={{
        width: 1253,
        height: 872,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        overflow:'visible',
        display:'flex',
        position:'absolute',
        left:'10%'
      }}
    >
        <Point name={'Brasilia/Brasil'} size={20} cidade={'brasilia'} pais={'br'} top={570} left={430}/>
        <Point name={'Washington/Eua'} size={20} cidade={'washington'} pais={'eua'} top={420} left={270}/>
        <Point name={'Ottawa/Canada'} size={20} cidade={'ottawa'} pais={'ca'} top={320} left={200}/>
        <Point name={'Reykjavík/Islandia'} size={15} cidade={'Reykjavík'} pais={'is'} top={290} left={440}/>
        <Point name={'Mexico City/Mexico'} size={15} cidade={'19.43'} pais={'-99.13'} top={480} left={190}/>
        <Point name={'Guatemala'} size={10} cidade={'14.5833'} pais={'-90.5333'} top={505} left={205}/>
        <Point name={'Managua/Nicaragua'} size={10} cidade={'Managua'} pais={'ni'} top={513} left={208}/>
        <Point name={'Panama City/Panama'} size={10} cidade={'Panama City'} pais={'pa'} top={522} left={208}/>
        <Point name={'Havana/Cuba'} size={10} cidade={'Havana'} pais={'cu'} top={490} left={210}/>
        <Point name={'San Juan/Porto Rico'} size={10} cidade={'18.46'} pais={'-66.11'} top={493} left={215}/>
        <Point name={'Bogotá/Colombia'} size={10} cidade={'Bogotá'} pais={'co'} top={540} left={190}/>
        <Point name={'Caracas/Venezuela'} size={10} cidade={'Caracas'} pais={'ve'} top={530} left={200}/>
        <Point name={'Georgetown/Guyana'} size={10} cidade={'Georgetown'} pais={'gy'} top={530} left={205}/>
        <Point name={'Paramaribo/Suriname'} size={10} cidade={'Paramaribo'} pais={'sr'} top={535} left={200}/>
        <Point name={'Caiena/Guyana Francesa'} size={10} cidade={'Caiena'} pais={'gf'} top={535} left={195}/>
        <Point name={'Quito/Equador'} size={10} cidade={'Quito'} pais={'ec'} top={552} left={108}/>
        <Point name={'Lima/Peru'} size={15} cidade={'Lima'} pais={'pe'} top={575} left={108}/>
        <Point name={'La Paz/Bolivia'} size={15} cidade={'La Paz'} pais={'bo'} top={585} left={115}/>
        <Point name={'Asunção/Paraguay'} size={10} cidade={'Asunción'} pais={'py'} top={617} left={115}/>
        <Point name={'Montevideo/Uruguay'} size={10} cidade={'Montevideo'} pais={'uy'} top={645} left={110}/>
        <Point name={'Buenos Aires/Argentina'} size={15} cidade={'Buenos Aires'} pais={'ar'} top={645} left={75}/>
        <Point name={'Santiago/Chile'} size={10} cidade={'Santiago'} pais={'cl'} top={640} left={33}/>
        <Point name={'Nuuk/Groelandia'} size={20} cidade={'Nuuk'} pais={'gl'} top={210} left={110}/>
        <Point name={'Moscow/Russia'} size={20} cidade={'Moscow'} pais={'ru'} top={320} left={320}/>
        <Point name={'tampere/Finlandia'} size={15} cidade={'61.1'} pais={'24.9'} top={310} left={240}/>
        <Point name={'Stockholm/Sweden'} size={10} cidade={'Stockholm'} pais={'se'} top={310} left={200}/>
        <Point name={'Oslo/Norway'} size={10} cidade={'Oslo'} pais={'no'} top={330} left={160}/>
        <Point name={'Copenhagen/Denmark'} size={7} cidade={'Copenhagen'} pais={'dk'} top={360} left={155}/>
        <Point name={'Berlin/Alemanha'} size={10} cidade={'Berlin'} pais={'de'} top={380} left={145}/>
        <Point name={'Warsaw/Polônia'} size={10} cidade={'Warsaw'} pais={'pl'} top={375} left={155}/>
        <Point name={'Minsk/Belarus'} size={10} cidade={'Minsk'} pais={'Belarus'} top={370} left={170}/>
        <Point name={'Vilnius/Lithuania'} size={7} cidade={'Vilnius'} pais={'Lithuania'} top={370} left={145}/>
        <Point name={'Ventispils/Latvia'} size={5} cidade={'Ventspils'} pais={'lv'} top={360} left={140}/>
        <Point name={'Talín/Estônia'} size={5} cidade={'Talín'} pais={'Estônia'} top={353} left={137}/>
    </div>
  );
}
