var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲:  https://github.com/mdewcm2024/1astud-site \n 網站:  https://mdewcm2024.github.io/1astud-site \n 討論區:  https://github.com/mdewcm2024/1astud-site/discussions \n 所有學員只要透過 Github Classroom 加入 site Team, 就擁有管理此倉儲與網站的權限. \n', 'tags': '', 'url': 'About.html'}, {'title': '專案', 'text': 'W10 各用戶可以利用 Replit 維護分組倉儲內容. \n 列出修課學員的倉儲與網站連結 \n 已知可以從\xa0 https://mdewcm2024.github.io/1astud-site/downloads/1a.txt \xa0取得學員的學號與帳號資料，使用 Brython 可以設法利用 Python 語法對此資料進行處理。 \n 第一步，先取得資料，然後將每一行內容隔開後，放入數列備用。 \n 若將下列 Brython 程式碼放入 Gist，然後利用網站的\xa0 Brython 頁面，以 src 作為資料網誌的內容，就可以直接在網站上 執行第一步程式 。 \n from browser import window, ajax\n \ndef fetch_csv_data():\n  # CSV 檔案網址\n  url = "https://mdewcm2024.github.io/1astud-site/downloads/1a.txt"\n \n  def on_complete(req):\n    if req.status == 200 or req.status == 0:\n      # 讀取 CSV 檔案內容\n      content = req.text\n \n      # 依照換行符號拆分資料\n      lines = content.split(\'\\n\')\n \n      # 建立空列表儲存資料\n      data = []\n \n      # 遍歷每一行資料\n      for line in lines:\n        # 忽略空白行\n        if line.strip() == "":\n          continue\n \n        # 依照逗號拆分資料\n        items = line.split(\',\')\n \n        # 將拆分後的資料加入列表\n        data.append(items)\n \n      # 印出結果\n      print(data)\n    else:\n      print("Error:", req.text)\n \n  # 發送 AJAX 請求\n  req = ajax.ajax()\n  req.bind(\'complete\', on_complete)\n  req.open(\'GET\', url, True)\n  req.set_header(\'content-type\', \'application/x-www-form-urlencoded\')\n  req.send()\n \n# 呼叫函式讀取 CSV 資料\nfetch_csv_data() \n \n', 'tags': '', 'url': '專案.html'}, {'title': 'g1', 'text': '心得 \n 41223120: \n 41223121: \n 41223126:上學期我們已經有學習計算機程式，所以這學期在學這門網際內容管理會覺得相較上學期更知道怎麼去解決問題，遇到問題第一時間會尋求CHATGPT的幫助，如果真的在沒辦法處理我會向同組的組員尋求幫助，但是這種方式也是會遇到瓶頸，像我現在就遇到很大的問題，明明內容都已經放到個人網站上，但是CONVERT之後，我很順利的PUSH之後，卻發現自己的網站內竟然沒有東西，回到網站後，竟然連修改都沒辦法，向同學尋求幫助也無法解決，只能等上課時間向老師尋求協助，當然還學到了一些東西像是: 如何將組員個人倉儲加入團隊倉儲的子模組、 在 replit 自設 .ssh 維護分組倉儲、在 Replit Codespaces 與 Gitpod 執行倉儲的動態與靜態網站、及在replit上設定分組權限，學過的就再次了解，新的東西就好好吸收，就算一時間無法迅速吸收，也可以反覆觀看老師錄的影片，去進行學習，只要反覆不停地去打程式，就算在怎麼困難，也能熟能生巧，老師也說了，要比別人強一定要多做，不能因為失敗就放棄，並且每次的失敗都要做紀錄，你怎麼會知道做失敗的東西就一定沒有用處呢，搞不好會跟威爾鋼一樣出其不意被製造出來。 \n 41223136:全部學生共協同一個倉儲，一定會遇到更新問題，自己就該去解決這問題，要編輯之前記得都要先git pull一次，不然發生問題，全部學生同時協同一個網站，就像一個團隊一起共同開發網站，讓我們感受到在外界也是一個團隊在處理網站，遇到問題可以詢問google ai studio，可以直接把問題丟上去，或者儲存圖片直接詢問AI，要多善加利用科技的工具，解決問題。 \n 41223153:一個網頁並非一個人能獨自完成，在遇到問題時可以跟組員互相討論、交流，並將交流過後的成果和解決方法，上傳在自己的網頁中，組員或自己再遇到類似問題時，可以用來參考，遇到更加艱難的問題時，適時地尋求ChatGPT的幫助，來解決網頁、指令、程式上的問題，最後再集結大家所學，共同創造以及維護，屬於自己組別的網頁，並在網頁上，更新老師給予的專題與題目，解決過程。 \n', 'tags': '', 'url': 'g1.html'}, {'title': 'g2', 'text': '\n \xa0 \n 41223104：這門課程其實上學期也有修過一次，但感覺這次的課程內容有稍微不同，但大致上一樣，透過上學期的經驗，在操作及編輯網頁來說顯得更容易了。還記得上學期因為在摸索課程內容，所以學得相當困難、不容易，但多虧有上學期的學習磨練，這學期得以快速掌握課程核心，完成課堂的許多作業。我也漸漸在想，為甚麼要讓我們每次完成課程功課在編輯網頁後都要將自己編輯了甚麼上傳到Replit？我想可能是因為社會上的各個公司都需要利用網頁來介紹自己的公司達到行銷效果，所以公司內部會有網頁編輯員，當他們編輯好網頁時，需要上傳自己編輯的內容，給公司的高管看並且檢查。假如有網頁上的錯誤，修改網頁時，公司裡的網頁工程師也能快速知道錯誤出現在哪裡，然後修正錯誤吧。 \n 41223152:這次網際內容管理,讓我學習到了更多程式語言,是加深了一年級上學期的東西去更進階,這學期依樣用到github和replit但這次難度真的差很多,分組要做的東西也更多,都是需要透過團隊合作去完成的,所以必須分工合作,安排每個人的工作,這次上課作業也增加許多,有其中重點整理,上面有多的問題,必須自己去網路上找尋答案,到自己的網站去統整,上次上課的內容雖然難度很高,但是老師都會錄製影片,假如上課時分心沒有聽清楚的時候就可以在回顧影片找尋不會的內容,老師讓我們自己架設網站,去把上課內容整理,知道自己每堂課做了甚麼,這樣之後要考研究所就可以當作推甄資料,假如到了業界去上班,就可以給老闆看看,我大學做過的網站,說不定他們公司也需要這種人才,去增加工作的的方便性,可以用在文出處理和產品行銷,都可大大減輕非常多的人力,所以現在的時候必須好好的瞿上課去增加自己的實力,提申自己的價值,才會到重用。 \n', 'tags': '', 'url': 'g2.html'}, {'title': 'g4', 'text': '41223118 \n 最一開始會選修這門課，是因為在上學期的計算機概課程中，了解了未來網路虛擬世界在業界的重要性，雖然我們機械設計應該是繪圖設計和CNC機器加工主要核心，但想想在這些領域和世界的走向，會發現AI ChatGTB這些程式軟體的興起會漸漸變成主流。各行各業都可能會被這些機器取代，而機器怎麼自己執行想做的，也就是寫程式這塊會變成鐵飯碗，相對的這條路走得也會是比較辛苦的，但現在業界裡有哪項高端產業會是不辛苦的，重點在於能否在這門課上找到自己未來出路。 \n \n 41223144 四設計一甲 趙羿舜   \n 我發現只要有來上課 ，實際操作過 ,就不太會忘記上課的內容，之前沒學到的可以問同學跟看老師講解的影片  影片內容說的也很清楚明白，在原本不太會的情況下，有朋友教我各種代碼分別代表什麼意思，還有為何衝突問題  與如何去解決衝突，在同學的幫助下，我不但自己了解了上課的內容，我也可以去幫助其他朋友。  在學習git上，與去理解了git的一些常用命令。  例如 : \n  git init：初始化本地存儲庫。  \n git add  <file >：將文件添加到暫存區。  \n git push：將本地提交推送到遠程存儲庫。  \n git pull：從遠程存儲庫拉取更改到本地。  \n git branch：列出所有分支。  \n git commit  -m  "message "：提交更改。  \n 老師拍的影片內容大致上說明得很清楚，遇到不會的有問到我要的答案，我覺得我對git也越來越熟悉了，  就是常常因為一個英文字母打而導致整串跑不出來，期望我能更精進去使用git。 \n \n 41223150 設計一甲 顏宇慶 \n 在這次的網際網路概論的課程當中，學到了比上學期計算機概論更加深入的東西，學習利用github的Codespaces的進行程式編碼，不在使用replit程式碼編輯器，也因為這學期用的是新的程式碼編輯器，所以有在網路上查詢了一些關於github Codespaces資料。 \n 快速開始開發：無需本地設置開發環境，即可在瀏覽器中即時開始編碼。 無需配置：Codespaces 提供預先配置好的開發環境，節省了配置開發環境的時間。 彈性擴展：開發人員可以根據項目的需要自定義開發環境，並保存配置供以後使用。 協作：多個用戶可以同時在同一個 Codespace 中協作開發，進行即時編碼和審查。 與 GitHub 整合：Codespaces 與 GitHub 存儲庫直接整合，開發人員可以輕鬆在開發環境中訪問代碼、提交更改、發布拉取請求等。 (以上是關於github Codespaces的相關資料) \n 進行操作的時候還是有時會遇到與上學期相同的問題，也就是會有資料與資料相互衝突的問題，這個問題也是這一次作業我遇到最大的問題，大家都同時在用所以一直衝突導致無法上傳成功，所以要一直找尋方法來解決，也嘗試問過chatgpt，但是得到的不是我想要的答案，也有請教同學，試了好幾次終於最後成功了。 \n 在這次的作業當中，我也意識到我自己還有很多需要加強的地方，多學習程式語言、多看相關的教學影片，學習如何更好的解決衝突問題，來讓網站變得更完美。 \n \n 41223140 四設計一甲 黃耀韋 \n 這次的網際內容管理的課程我覺得對我的幫助很大，課程中讓我了解到如何運用github的Codespaces來創建網頁，並編輯網頁。在編輯的時候會遇到衝突的問題，當別人上傳後，版本不是最新的，就會導致衝突而無法上傳，請教同學後，我也學到如何解決衝突的問題，最後成功上傳。老師的網站上面也有老師錄的影片，影片很仔細地講解每一個步驟，看著影片做就會了。 \n 我覺得程式就是要多練習，打了之後就不會忘記了，再學更深入之後可以架設自己的網頁，在現在的時代，這項技能非常有用，畢竟現在是資訊量爆炸的時代，如何利用網路來傳達訊息非常重要。我覺得我還有很多不熟悉的地方需要更多的練習，才可以使用得更順暢。 \n \xa0 \n', 'tags': '', 'url': 'g4.html'}, {'title': 'g5', 'text': '心得 \n 41223101: 這堂課教會我如何善用github和C語言，這兩個都是可以運用各種不同的方式去完成自己的設計，幾周下來也理解github的歷史和創作人的設計理念，雖然都是由ChatGPT ， 回答但也因此熟悉了一點 ，需要團隊合作的部分偏難一點，希望之後遇到的都可以在ChatGPT上解決 。\xa0 \n 41223106: 從下學期開始以團隊分組方式進行，所以我學到很多關於組別網站的一些知識，例如:如何將組員個人倉儲加入團隊倉儲的子模組、 在 replit 自設 .ssh 維護分組倉儲、在 Replit Codespaces 與 Gitpod 執行倉儲的動態與靜態網站、及在replit上設定分組權限，以上。 \n', 'tags': '', 'url': 'g5.html'}, {'title': 'g6', 'text': '41223122:這堂課與上學期不同，有在分組內在設置自己的一個個人倉儲，還有一個大組一起維護整個倉儲。不一樣的地方還有之前都是從Replit進去的，這次教的是直接從Github進去。變得比較直接。這學期也能用GPT看看上課的內容什麼讓我們對於這堂課更加了了解。還學會用ssh分組維護及權限上的理解。 \n', 'tags': '', 'url': 'g6.html'}, {'title': 'g7', 'text': '41223134:這學期的網際內容管理剛開始的課程內容與上學期的計算機程式有些類似，因此比起上學期學習起來壓力減少許多，經由這個課程我終於大概暸解了網路上的網頁背後是如何創立、編輯與維護，也學到如何用Codespaces執行網站的編輯與更新，過程中也培養自己在程式或網站遇到問題時先到網路上尋找解法，或是反覆詢問ChatGPT來解決問題，老師也將課堂所講解的每個步驟完整錄製，在課堂中跟不上的步驟也能看著影片練習，有相當完整的學習環境。 \n 老師也常說未來是AI及程式語言的天下，就算是學機械也會需要撰寫程式碼來操控CNC，之後就業時也能將個人網站給面試官看，讓自己多一個加分項目，程式語言是躲不掉的，希望自己能在還有老師教的時候把程式弄懂，增加自己的出路。 \n 41223138 黃彥捷 \n 心得:這次的網際內容管理讓我們能夠輕鬆地建立、編輯和管理網站上的內容。它提供了一個直觀的用戶界面，讓非技術人員也能夠輕鬆地進行內容更新，而不必依賴開發人員的幫助。這使得內容更新和修改變得更迅速靈活，有助於及時回應用戶需求和市場變化。我們學習如何使用GitHub Codespaces，它允許使用者在瀏覽器中輕鬆地建立和存取開發環境。透過 Codespaces，你可以在 GitHub 上打開一個程式碼倉庫，並在雲端建立一個可用於編寫、調試和執行程式碼的開發環境。這意味著你不需要在本地安裝任何開發工具或相依套件，只需一個連接網際網路的設備即可進行開發工作。這對於團隊合作、新專案的快速啟動以及移動工作環境都非常有用。這次除了學習github codespaces知識外，我還從課程中學會了如何更好地解決問題、分配時間。通過參與課程中的討論、作業和項目，我提高了自己的溝通能力和團隊合作能力。 \n', 'tags': '', 'url': 'g7.html'}, {'title': 'g8', 'text': '41223129 心得 \n 這門課程老師教會我們使用各種方式來維護網頁,例如replit,codespaces,進端等等，在維護過程遇到合併衝突，我們會詢問老師和chatgpt來解決問題，也會和組員來進行討論，在日漸增加對git的操作下，我對這種git有稍微熟悉一點感覺，但我對於自己操作程式還有些許不熟。 \n 41046109 心得 \n 上了這門網際內容管理後，我覺得這方面的事情不怎麼好理解，畢竟之前也只稍微接觸這類的東西，例如：html，之前懂了html的指令，所以在加入新增文字、連結的都覺得很有趣，但是久沒有接觸指令的會完全不知道該指令的功用。 \n 之前都是自己加入自己的網站，沒有與其他人共同維護網站經驗，也不會有所衝突，但是這堂課不只有自己的個人網站、各小組的網站以及全班的專案網站，越多人可以更改網站內容越容易有衝突，因為一時之間有好幾個人想要對該網站進行更改的動作。 \n 這時會有衝突，像是在課堂中老師要我們各組的一個人在1astud-site網站中新增一個h2的組別，可是因為衝突太多，我們這組新增的網頁一直推不上去，直到要下課才終於看到我們這組的網頁新增上去。 \n 在過程因為我在replit加入的1astud-site與可看到網站的狀態不一致，讓我一直都不知道該如何動作，我就一直在試，能不能我新增完再推出去，就可以看到當前已加入的各組頁面了，但是就是推不上去，最後replit的git有問題，導致我這堂課也只有把第二步的連結做好而已。網際內容管理這堂課對我來說是很難的，畢竟我沒有基礎，指令不常用會忘記該功能。 \n 41046137 心得 \n 老師所要講述的是，我們必須要透過自行解決問題的能力來面對外來千變萬幻的新穎問題，不僅僅是透過學習，也可以透過詢問現今日漸崛起的AI技術來幫助我們解決問題。善用這些工具，幫助我們解決各種問題、衝突。 \n', 'tags': '', 'url': 'g8.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};