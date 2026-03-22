/**
 * Добавляет ведущие нули к числу.
 * @param num - число или строка, к которой нужно добавить нули
 * @param length - итоговая длина строки
 * @returns строка с ведущими нулями
 */
export default function padZero(num: number | string, length: number): string {
  return String(num).padStart(length, '0');
}
