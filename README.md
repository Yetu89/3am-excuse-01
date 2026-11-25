# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Yetu89/3am-excuse-01/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Yetu89/3am-excuse-01/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

My entry for the [make.fun](https://make.fun) bounty **The 3 AM Excuse**
([bounty page](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)): a single
line, under 200 characters, in which a hardware wallet explains why it will
not sign anything at 3 AM. Free entry.

## The excuse

> My buttons filed a noise complaint at midnight. Beg the screen all you want — it stopped listening at 3 AM, and so did I.

(121 characters, one line, no trailing newline.)

## Why this line

The wallet talks like a piece of hardware with its own working hours: its
buttons have lodged a complaint, its screen has clocked off, and the whole
device is done for the night. The joke only works at 3 AM — at 3 PM the
screen would still be listening — and it stays clear of the tired
battery, firmware-update and cold-storage gags.

## Grading note

Four candidate excuses were written and scored by Grok (grok-4.3) against
the judge's brief — on-subject first, then originality, wallet voice, use
of the hour, and tight wording. This line won with 9/10; the other three
scored 7, 8 and 8. The full candidate list lives in `candidates.txt` in
the parent directory of this repository's source folder.

## Running it

Needs Node 22+ (standard library only, no dependencies):

```sh
node main.ts
```

That writes the excuse to `/output/entry.txt`. To try it locally with a
different output folder:

```sh
OUTPUT_DIR=/tmp/3am-excuse-test node main.ts
```

Before writing, the program checks the text is 1–200 characters long
(counted in code points), fits on one line, and is not blank or padded
with whitespace.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
