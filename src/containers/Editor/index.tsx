import * as React from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../../action-creators/index";
import styles from "./styles";
// import { recurringErrors } from "../../utils";

/** Bug:
 * Um aluno reportou que perdeu todo texto dele após sair da escola e ir para casa
 * Segundo o aluno, o mesmo não fechou o aplicativo do Ipad (navegador)
 * e quando chegou em casa colocou o Ipad para carregar e ligou-o, após isso
 * o campo de texto estava vazio, ele tentou digitar algo e acabou perdendo todo o texto
 *
 * Dica: use um estado do redux
 */
function Editor({ editorChanges }: any): JSX.Element {
	return (
		<div style={styles.wrapper}>
			{/** Adicionar um debounce em toda chamada da editorChanges de 5 sec de espera */}
			<textarea
				id="text"
				style={styles.textarea}
				onChange={(event) => editorChanges(event.target.value)}
			/>
			<div style={styles.view}>
				{/** Mostrar os dados do state.editor aqui:
				 * Lembre-se:
				 * - Deve ser retirado todos espaços duplicados e paragrafos duplicados.
				 * - Cada paragrafo deve estar dentro de um p apropriado
				 * - Caso for encontrado uma palavra que está incluida no vetor recurringErrors, deve-se
				 * adicionar um fundo vermelho #d45f5f44 para destacar essa palavra
				 */}
			</div>
		</div>
	);
}

export default connect(null, (dispatch) => ({
	editorChanges: (value: string) =>
		dispatch(ActionCreators.editorChanges(value)),
}))<{}>(Editor);
