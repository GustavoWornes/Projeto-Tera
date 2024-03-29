import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {api} from "../../Services/services"
import { CartContext } from "../../contexts/auth";
import { utils } from "../../utils";
import Loading from "../../Components/Loading/loading"
import "./style.css"
import "bootstrap"
const BodyPageProduto = () =>{
  const { authenticated } = useContext(CartContext);
  const [product,setProduct] = useState([]);
  const {id} = useParams();
  const cart = useContext(CartContext);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [carrosel,setCarrosel] = useState();
  const [matches,setMatches] = useState(
    window.matchMedia("(min-width: 768px").matches
  );
  const add = (product) => () =>{
  
        cart.addToCart(product)
       utils.notificationCart()
      
  }
  useEffect(()=>{
    
    api.get(`/product/${id}`).then(({data}) =>{
      setProduct(data)
      setCarrosel(data.img_principal)
      setRemoveLoading(true)
    });
    console.log("Esse é o id",id)
    window
      .matchMedia("(min-width: 1000px)")
      .addEventListener('change',e=>setMatches(e.matches));
    
  },[id])
console.log("Console.log Produto",product)
console.log("console.log name",product.name)

    return(
      <main> <br/> <br/>
        {removeLoading ? (
               <><div className="container">
            <div className="row text-center">
              {matches && (<div className="col-sm-1">
                <div className="miniproduto">

                  <img id="Img-um" alt={product.name} style={{ width: '100px' }}
                    src={`${product.img_um}`} onClick={(event) => setCarrosel(event.target.src)} />
                </div>
                <div className="miniproduto">
                  <img id="Img-dois" alt={product.name} style={{ width: '100px' }}
                    src={`${product.img_dois}`} onClick={(event) => setCarrosel(event.target.src)} />
                </div>
                <div className="miniproduto">
                  <img id="Img-tres" alt={product.name} style={{ width: '100px' }}
                    src={`${product.img_tres}`} onClick={(event) => setCarrosel(event.target.src)} />
                </div>
                <div className="miniproduto">
                  <img id="Img-quatro" alt={product.name} style={{ width: '100px' }}
                    src={`${product.img_quatro}`} onClick={(event) => setCarrosel(event.target.src)} />
                </div>

              </div>)}
              
              <div className="col-md-7">
                <img src={`${carrosel}`} alt={product.name} id="imagem" />
              </div>
              {/* <div class="w-100"></div>
        usado para separar divs
        src={`${product.img_principal}`}
        */}
              <div className="col-sm-3" id="descricaoProduto">
                <h2 style={{ textTransform: 'uppercase' }}>{product.name}</h2>
                <span id="produto-id-1997">
                  <p>R$:{product.preco}</p>

                  {/* <pre>
      {JSON.stringify(cart,null,2)}
    </pre> */}
                </span>
                <p className="text">Cor:{product.cor}</p>
                <label htmlFor="inputDoTamanho">Tamanho</label>
                <select id="inputDoTamanho" className="form-control" required>
                  <option selected>Escolha Uma Opção...</option>
                  <option value={0}>35</option>
                  <option value={1}>36</option>
                  <option value={3}>37</option>
                  <option value={4}>38</option>
                  <option value={5}>39</option>
                  <option value={6}>40</option>
                  <option value={7}>41</option>
                  <option value={8}>42</option>
                  <option value={9}>43</option>
                  <option value={10}>44</option>
                  <option value={11}>45</option>
                </select>
                <br />
                <button type="button" id="comprar" data-testeid="add-product-button" className="btn btn-pill btn-dark"
                  onClick={add(product)}
                >Adicionar no carrinho</button>
              </div>
            </div>
          </div><div className="container">
              <div className="row">
                <h2 className="title text-center" style={{ textTransform: 'uppercase' }}>informações</h2>
                <table className="table table-md">
                  <tbody><tr>
                    <th>Terreno</th>
                    <td>{product.terreno}</td>
                  </tr>
                    <tr>
                      <th>Sistema de amarração</th>
                      <td>{product.sistema_de_amarracao}</td>
                    </tr>
                    <tr>
                      <th>Peso Aprox.</th>
                      <td>{product.peso_aproximado}</td>
                    </tr>
                    <tr>
                      <th>Impermeabilização</th>
                      <td>{product.impermeabilizacao}</td>
                    </tr>
                    <tr>
                      <th>Drop (mm)</th>
                      <td>{product.drop}</td>
                    </tr>
                    <tr>
                      <th>Ajuste</th>
                      <td>{product.ajuste}</td>
                    </tr>
                  </tbody></table>
              </div>
              <div>
                <p className="texto-descricao">
                  {product.descricao}
                </p>
              </div>
            </div></>
        ):<Loading />}
      </main>
    )
        
}

export default BodyPageProduto
