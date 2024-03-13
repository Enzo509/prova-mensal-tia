// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição

function showAnswer(index) {
    // Retorne uma string como resposta
    // Exemplo: "Minha resposta"
    return "Resposta de exemplo do arquivo"
}

export function mostProbablyQuestion() {
    // Veja quem teve mais matches dos bancos
    // Chame a showAnswer com o parâmetro
}

// Function to respond to questions
export function respondePergunta(pergunta) {
    const palavrasChave = pergunta.toLowerCase().split(' ');
    let resposta = "";

    // Check for matches in each keyword object
    palavrasEscolaFundador.matched = palavrasEscolaFundador.probablyWords.filter(word => palavrasChave.includes(word)).length;
    palavrasCursosTecnicos.matched = palavrasCursosTecnicos.probablyWords.filter(word => palavrasChave.includes(word)).length;
    palavrasMatricula.matched = palavrasMatricula.probablyWords.filter(word => palavrasChave.includes(word)).length;

    // Determine which question has the most matches
    const mostMatches = Math.max(palavrasEscolaFundador.matched, palavrasCursosTecnicos.matched, palavrasMatricula.matched);

    if (mostMatches === 0) {
        // If no matches, return a generic response
        resposta = "Desculpe, não posso responder a essa pergunta. Por favor, entre em contato conosco para obter ajuda.";
    } else {
        // Call the function to show the answer based on the most matched question
        resposta = showAnswer(mostProbablyQuestion());
    }

    return resposta;
}

// Sample usage
console.log(respondePergunta("Qual o nome do fundador da instituição? Quem era ele?"));
console.log(respondePergunta("A escola oferece curso técnico? Quais?"));
console.log(respondePergunta("Onde entro em contato pra matricula ou rematricula?"));
console.log(respondePergunta("Qual é a capital do Brasil?"));
n