# Research log

## 2026-11-17 — Initial project website

- **Purpose and changes:** Create the public Quad-Explorer project website in an independent repository. Add the author-provided full paper title, six existing Building experiment videos, extracted video posters and a final-map teaser, responsive styling, and single-video playback behavior. Omit authors, abstract, paper links, and citation information as requested. Add a GitHub Pages workflow that publishes only `website/`; reserve the repository root for future source code.
- **Validation:** Confirmed all six videos use H.264 at 2560 × 1080 and each is smaller than 30 MB; copied-file SHA256 hashes match the originals. Local asset and fragment links, exact paper title, six players, JavaScript syntax, and whitespace checks passed. Headless Chrome checks passed at desktop (1440 px) and mobile (390 px) widths with no horizontal overflow: all images loaded, all six video metadata loads succeeded, two videos played, playing the second paused the first, and navigation worked. No page errors or HTTP failures were observed. Desktop and mobile screenshots were visually inspected. A focused static review found no material issues.
- **Execution notes:** GitHub Pages was initially unconfigured (expected 404); it is now configured for workflow publishing. Browser tooling was installed outside the project for local checks. The tool-install shell command returned 1 because a following optional `command -v chromium` lookup failed; installation succeeded and checks used the installed Google Chrome executable. The first push failed because the empty local clone initialized as `master`; renamed it to `main` to match the workflow and retried. No website validation failures occurred.
- **Pending:** Initial push, deployment, and live URL verification. Full robot tests were not run because this change only publishes existing media.
- **Kept:** Website source and existing video files. The development repository is unchanged. This update does not constitute a new robot experiment.

- **Upload retry:** Two combined 169 MB pushes failed with HTTP 408, including an HTTP/1.1 buffered retry. The page and image-only initial push then succeeded. Uploading the six unchanged videos in separate commits before adding the deployment workflow.
- **Media batch 1/6:** Add `building_1_chenruiqiu.mp4` (29512485 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 2/6:** Add `building_2_dongxiayuan.mp4` (29430082 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 3/6:** Add `building_3_dongzhongyuan.mp4` (29397556 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 4/6:** Add `building_4_longbinlou.mp4` (29571821 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 5/6:** Add `building_5_puyuan.mp4` (29409352 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 6/6:** Add `building_6_xiayuan.mp4` (29453216 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.

## 2026-11-17 — Enable GitHub Pages deployment

- **Changes:** Add the Pages workflow after all six media batches uploaded successfully. It publishes only `website/` and runs on website/workflow changes to `main` or manual dispatch. Set the repository description to the supplied paper title and its homepage to the project URL.
- **Validation:** All six separate video pushes succeeded. The exact source state passed local asset, hash, JavaScript, desktop/mobile browser, video metadata/playback, and screenshot checks recorded above. Workflow structure and publication path were reviewed against GitHub's static-site starter.
- **Pending:** First workflow execution and public URL/media verification. No new robot experiments or repository-wide tests were run. Configuration is retained.

## 2026-11-17 — Public deployment verified

- **Result:** The initial Pages workflow completed successfully in 28 seconds for source commit `d8ab09c69088f05383303302094b1e1723e21498`: https://github.com/zhechen003/Quad-Explorer/actions/runs/44093021583. The public project URL is https://zhechen003.github.io/Quad-Explorer/.
- **Validation:** The public homepage returned HTTP 200. Headless Chrome checks against the public URL passed at 1440 px desktop and 390 px mobile widths. All images and all six videos' metadata loaded; two videos actually played, and the second paused the first. Exact title, experiment navigation, single-column mobile layout, and absence of horizontal overflow passed. No browser errors or HTTP failures occurred. Live screenshots and verification results are kept separately from the published source.
- **Notes and scope:** GitHub emitted runner/action runtime deprecation notices, but all deployment steps passed. Only the website and existing experiment videos were published; robot source code, development history, and unrelated development materials were not uploaded. Authors, abstract, paper links, and citation information remain omitted as requested. No new physical experiments or full robot tests were performed. Website, media, and deployment configuration are retained.

## 2026-11-17 — Real-world experiment settings

- **Changes:** Add Experiment Settings above the six Building videos: Robot — Unitree GO2W; Onboard Computer — Jetson Orin NX 16GB; LiDAR — Livox MID-360S. Hardware information is supplied by the author. Display three columns on desktop and one column on mobile.
- **Validation:** Headless Chrome checks at 1440 px and 390 px confirmed all three entries, the expected column layouts, and no horizontal overflow. Inspected the settings screenshot; whitespace checks passed. No failures. This content/layout change does not require robot or video tests.
- **Publication and failures:** Initial deployment run `44093881708` failed with a GitHub Pages HTTP 502. Re-running its failed job produced duplicate `github-pages` artifacts and failed; its status watcher also encountered a transient TLS handshake timeout. Started a fresh manual workflow run without changing the workflow. Run `44094865294` succeeded for commit `ad4d892c12e309101ce71481ea76c2c194118517`: https://github.com/zhechen003/Quad-Explorer/actions/runs/44094865294. The public homepage returned HTTP 200 and contained all three hardware entries; the published stylesheet contains the new settings layout. Changes are retained and live. The development repository is unchanged.
