export function criticalityLevel(level) {
  switch (level) {
    case 1:
      return "1 (fraca)";
    case 2:
      return "2 (leve)";
    case 3:
      return "3 (médio)";
    case 4:
      return "4 (moderada)";
    case 5:
      return "5 (intenso)";
    default:
      return "Nenhum sintoma";
  }
}

export function criticalityTag(level) {
  switch (level) {
    case 1:
      return "azul";
    case 2 | 3:
      return "amarelo";
    case 4 | 5:
      return "vermelho";
    default:
      return "nenhum";
  }
}