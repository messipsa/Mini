import React, { Component } from 'react';
import axios from 'axios';

// Utiliser axios a la place de fetch context api parceque fetch n'est pas supporte
// par les api public pour des raisons de securite (ils te demandent une identification cors qu'on a pas )
// axios est plus securise et plus facile a utiliser (pour le telecharger lance la commande : npm install axios)
// avec axios, pas besoin de utiliser le JSON parse car il le fait automatiquement

class Poster extends Component {
	state = {
		posts : []
	};

	componentDidMount () {
		// Le nom de la methode etait mal ecrit c'est ca le vrai nom
		// la methode componentDidMount execute le code une seule fois a la creation de la page web
		//c'est pour cela qu'on l'utilise pour les api (pour les appeler une seule fois seulement)
		// d'utre methode speciale des class compoenent de React sont :
		// componentDidupdate() : pour les actions executes a chaque fois que la page est mise a jour
		// componentWillUnmount() : l'element est enlevee de la page
		// componentDidCatch : une erreur a etait  detectee dans un bloc catch
		// consulter la documentation pour plus de details

		axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
			const posts = res.data;
			this.setState({ posts });
		});
	}

	render () {
		return (
			<div>
				<h1>Halliche</h1>
				{
					this.state.posts.map ? this.state.posts.map((
						item // avant d'afficher les données il faut verifier que
					) => (
						//la demande de l'api est deja fini (on a pu recevoir les données)
						// sinon une erreur est affichee si on essaye d'executer la fonction map alors que
						// posts est vide (car au debeut on n a declarer posts comme etant un tableau vide)

						<div key={item.id}>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</div>
					)) :
					<React.Fragment />}

				{
					this.state.posts[0] ? this.state.posts[0].title :
					null}
			</div>
		);
		// si la demande de l'api n'est pas encore termine on utilise <React.Fragment /> par default chgol la meme chose kima null
	}
}

export default Poster;
