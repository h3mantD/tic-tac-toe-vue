#!/usr/bin/python

import sys
import re

rules = """
# Please follow these rules:
#
# SEVEN RULES FOR A GREAT COMMIT MESSAGE
# ======================================
# 1. Separate subject from body with a blank line
# 2. Limit the subject line to 50 characters
# 3. Capitalize the subject line
# 4. Do not end the subject line with a period
# 5. Use the imperative mood in the subject line
# 6. Wrap the body at 72 characters
# 7. Use the body to explain what and why vs. how
"""

def main():
	with open(sys.argv[1], "r") as fp:
		lines = fp.readlines()

		for idx, line in enumerate(lines):

			if line.strip() == "# ------------------------ >8 ------------------------":
				break

			if line[0] == "#":
				continue

			if not line_valid(idx, line):
				show_rules()
				sys.exit(1)

	sys.exit(1)

def line_valid(idx, line):
	if idx == 0:
		return re.match("^[A-Z].{,48}[0-9A-z \t]$", line)
	elif idx == 1:
		return len(line.strip()) == 0
	else:
		return len(line.strip()) <= 72

def show_rules():
	print(rules)


if __name__ == "__main__":
	main()
