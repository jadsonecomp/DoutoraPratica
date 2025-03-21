import React from "react";
{/*import "../cursoSutura.css"*/}; // Importação do arquivo de estilos externo

export const CursoSutura = (props) => {
  const handleClick = () => {
    alert("🚀 Parabéns! Sua vaga está garantida. Em breve entraremos em contato.");
  };

  return (
    <div id="curso-sutura" className="text-center">
      <div className="container">
        <div className="section-title">
          <h1>Domine a Sutura na Enfermagem e Atue com Segurança!</h1>
          <p>Curso prático e completo para enfermeiros que querem se destacar.</p>
        </div>

        <div className="row">
          {props.data 
            ? props.data.map((section, index) => (
            <div key={index} className="col-md-12 section">
              <h2 className="subtitle">{section.title}</h2>
              {section.content && section.content.map((item, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: item }}></p>
              ))}

              {section.list 
                ? (
                <ul className="list">
                  {section.list.map((listItem, idx) => (
                    <li key={idx} className="list-item">{listItem}</li>
                  ))}
                </ul>
              ) : " "}
            </div>
          )) : " "}
        </div>
      

        <div className="row">
          <div className="col-md-12">
            <p className="alert-text">⚠️ VAGAS LIMITADAS! Garanta a sua antes que acabem.</p>
            <button className="button" onClick={handleClick}>QUERO MINHA VAGA!</button>
          </div>
        </div>
      </div>

     {/**  <footer className="footer">
        <p>&copy; 2025 - Curso de Sutura para Enfermeiros | #DraPratica</p>
      </footer> */}
    </div>
  );
};
