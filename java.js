
   
           

            // Kod 6: Metin Rengini Değiştir
            function changeTextColor() {
                var textElement = document.getElementById("textElement");
                var colors = ["kırmızı", "mavi", "yeşil", "mor", "turuncu"];
                var randomColor = colors[Math.floor(Math.random() * colors.length)];
                textElement.style.color = randomColor;
            }

            // Kod 7: Öğeyi Göster/Gizle
            function showHideElement() {
                var hiddenElement = document.getElementById("hiddenElement");
                if (hiddenElement.style.display === "none") {
                    hiddenElement.style.display = "block";
                } else {
                    hiddenElement.style.display = "none";
                }
            }

            // Kod 8: Sınıfı Değiştir
            function toggleClass() {
                var toggleElement = document.getElementById("toggleElement");
                toggleElement.classList.toggle("highlight");
            }

            // Kod 9: Uyarı Göster
            function displayAlert() {
                alert("Bu bir uyarı mesajıdır!");
            }

            // Kod 10: Tıklama Sayısını Arttır
            var clickCount = 0;
            function increaseCount() {
                clickCount++;
                document.getElementById("clickCount").textContent = clickCount;
            }

            // Kod 11: Girilen Değeri Al
            function getInputValue() {
                var inputValue = document.getElementById("inputField").value;
                document.getElementById("inputValue").textContent = "Girilen değer: " + inputValue;
            }

            // Kod 12: Ses Çal (Ek ses dosyası gerektirir)

            // Kod 13: Zamanlayıcıyı Başlat/Durdur
            var timer;
            function startStopTimer() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                } else {
                    timer = setInterval(function() {
                        var timerDisplay = document.getElementById("timerDisplay");
                        var minutes = parseInt(timerDisplay.textContent);
                        timerDisplay.textContent = formatTime(minutes + 1);
                    }, 1000);
                }
            }

            // Kod 14: Yeni Sekmede Aç
            function openNewTab() {
                window.open("https://www.example.com", "_blank");
            }

            // Kod 15: ... (Kendi kodunuzu buraya ekleyin)

            // Zamanlayıcı için yardımcı fonksiyon
            function formatTime(minutes) {
                var minutesStr = String(minutes % 60);
                var secondsStr = String(Math.floor(minutes / 60));
                if (minutesStr.length < 2) {
                    minutesStr = "0" + minutesStr;
                }
                if (secondsStr.length < 2) {
                    secondsStr = "0" + secondsStr;
                }
                return secondsStr + ":" + minutesStr;
            }
       
 
     // Kod 1: Geçerli Tarih ve Saati Göster
            setInterval(function() {
                var now = new Date();
                var dateString = now.toLocaleDateString("tr-TR");
                var timeString = now.toLocaleTimeString("tr-TR");
                document.getElementById("dateDisplay").textContent = "Geçerli Tarih ve Saat: " + dateString + " " + timeString;
            }, 1000);

            // Kod 2: Arka Plan Rengini Değiştir
            function toggleBackgroundColor() {
                document.body.classList.toggle("dark-theme");
            }

            // Kod 3: Form Doğrulama
            document.getElementById("myForm").addEventListener("submit", function(event) {
                var name = document.getElementById("nameField").value;
                var email = document.getElementById("emailField").value;
                if (name === "" || email === "") {
                    alert("Lütfen isim ve e-posta alanlarını doldurunuz.");
                    event.preventDefault();
                }
            });

            // Kod 4: Slayt Gösterisi
            var slideIndex = 0;
            function plusSlides(n) {
                slideIndex += n;
                showSlides(slideIndex);
            }

            function currentSlide(n) {
                slideIndex = n;
                showSlides(slideIndex);
            }

            function showSlides(n) {
                var slides = document.getElementById("slideShow").getElementsByTagName("img");
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block";
            }

            // Kod 5: Soluklaşma Efekti
            function fadeInOut() {
                var fadeText = document.getElementById("fadeText");
                fadeText.style.opacity = (fadeText.style.opacity === "1") ? "0.3" : "1";
            }
       