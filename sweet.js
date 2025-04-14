document.getElementById('alertBasico').addEventListener('click',()=>Swal.fire('Alerta Básico!','Este é um alerta simples','question'));

document.getElementById('alertSucesso').addEventListener('click',()=>Swal.fire('Sucesso!','A operação foi concluída com sucesso!','success'));

document.getElementById('alertErro').addEventListener('click',()=>Swal.fire('Erro!','Ocorreu um erro na operação!','error'));

document.getElementById('alertAviso').addEventListener('click',()=>Swal.fire('Aviso!','Isso é um aviso!','warning'));

document.getElementById('alertInfo').addEventListener('click',()=>Swal.fire('Informação!','Lorem ipsum dolor sit amet','info'));

document.getElementById('alertConfirm').addEventListener('click',()=>Swal.fire({title:'Confirme!',text:'Você tem certeza de sua ação?',icon:'question',confirmButtonText:'sim',showDenyButton:true,denyButtonText:'não'}).then((result)=>{
    if (result.isConfirmed) Swal.fire("Confimado!","Sua ação foi realizada com sucesso.","success");
    else if(result.isDenied) Swal.fire("Negado!","Sua ação não foi realizada.","error");
    else if(result.isDismissed) Swal.fire("Cancelado!","Sua ação foi cancelada.","error");
}));

document.getElementById('alertInput').addEventListener('click',()=>Swal.fire({title:'Coloque o seu nome:',input:'text',inputLabel:'Input',inputPlaceholder:'Coloque o nome'}).then((result)=>{
    if(result.isConfirmed && result.value)Swal.fire(`Olá, ${result.value}!`,'Seu cadastro foi realizado com sucesso!','success');
}));

document.getElementById('alertTimer').addEventListener('click',()=>Swal.fire({title:'Sucesso!',text:'A janela se fechará em 5 segundos!',icon:'success',timer: 5000, timerProgressBar:true}));

document.getElementById('alertHtml').addEventListener('click',()=>{Swal.fire({
    title: "<strong>Exemplo <u>HTML</u></strong>",
    icon: "info",
    html: `
      Este é um alerta com <b>texto em negrito</b>,
      <a href="#" autofocus>links</a>,
      e outras tags HTML.
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Legal!',
  });
});