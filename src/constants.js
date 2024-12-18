export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  c: "11.2.0",
};

export const CODE_SNIPPETS = {
  javascript: `function printStarPattern(n) {\n\tfor (let i = 1; i <= n; i++) {\n\t\tconsole.log("*".repeat(i));\n\t}\n}\n\nconst n = 5; // Number of rows\nprintStarPattern(n);`,

  python: `def print_star_pattern(n):\n\tfor i in range(1, n + 1):\n\t\tprint('*' * i)\n\nn = 5  # Number of rows\nprint_star_pattern(n)`,

  java: `public class StarPattern {\n\tpublic static void main(String[] args) {\n\t\tint n = 5; // Number of rows\n\t\tfor (int i = 1; i <= n; i++) {\n\t\t\tfor (int j = 1; j <= i; j++) {\n\t\t\t\tSystem.out.print("*");\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t}\n\t}\n}`,

  c: `#include <stdio.h>\n\nvoid printStarPattern(int n) {\n\tfor (int i = 1; i <= n; i++) {\n\t\tfor (int j = 1; j <= i; j++) {\n\t\t\tprintf("*");\n\t\t}\n\t\tprintf("\\n");\n\t}\n}\n\nint main() {\n\tint n = 5; // Number of rows\n\tprintStarPattern(n);\n\treturn 0;\n}`,
};
