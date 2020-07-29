let msg = '';
let senha, senhaConfirm;
let output = document.querySelector('#output');

class ConstruirUser {
	constructor(nome, email, senha) {
		this.nome = nome;
		this.email = email;
		this.senha = ocultarSenha(senha);
	}
}

function ocultarSenha(senha) {
	senha = String(senha).split('');
	let senha2 = senha.map((item) => (item = '*')).join('');
	return senha2;
}

let usuarios = [];

function senhaFunc() {
	senha = prompt('Digite a sua senha');
	senhaConfirm = prompt('Confirme a sua senha');
}

function adicionar() {
	let name = prompt('Digite o nome do usuário');
	let email = prompt('Digite o email do usuário');
	senhaFunc();
	let count = 0;
	while (senha !== senhaConfirm) {
		if (count > 2) {
			alert(
				'Você errou a senha mais de 3 vezes. O seu IP foi bloqueado e sua página será APAGADA!, entre em contato com o administrador Kaleby!'
			);
			document.body.innerHTML = '';
			return;
		}
		alert('As senhas são diferentes! Tente novamente!');
		senhaFunc();
		count++;
	}

	const user = new ConstruirUser(name, email, senha);
	usuarios.push(user);
	alert('Usuário cadastrado com sucesso');
}

function mostrar() {
	msg = '';
	for (let i of usuarios) {
		msg += `<h3> Usuário: ${i.nome} <br> Email: ${i.email} <br> Senha: ${i.senha} </h3>`;
	}
	output.innerHTML = msg;
}

function limparDados() {
	usuarios = [];
	output.innerHTML = 'Usuários removidos';
}
