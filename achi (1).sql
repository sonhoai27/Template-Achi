-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2018 at 07:51 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `achi`
--

-- --------------------------------------------------------

--
-- Table structure for table `achi_author`
--

CREATE TABLE `achi_author` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_alias` varchar(255) NOT NULL,
  `author_intro` varchar(255) DEFAULT NULL,
  `author_avatar` varchar(255) DEFAULT NULL,
  `author_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_author`
--

INSERT INTO `achi_author` (`author_id`, `author_name`, `author_alias`, `author_intro`, `author_avatar`, `author_created_date`) VALUES
(1, 'Nguyễn Minh Chí', 'nguyen-minh-chi', 'Chúng ta không', 'http://localhost:8080/LandingPage/api/uploads/images/0ebae8caa264432f50ac1534629600000.jpg', '2018-08-18 07:04:27'),
(6, 'Demo', 'demo', 'Demo', 'http://localhost:8080/LandingPage/api/uploads/images/9c95b1ae1d3cb6cfb1da1534629600000.png', '2018-08-21 12:24:24');

-- --------------------------------------------------------

--
-- Table structure for table `achi_blog`
--

CREATE TABLE `achi_blog` (
  `blog_id` varchar(255) NOT NULL,
  `blog_id_category` int(11) NOT NULL,
  `blog_id_author` int(11) NOT NULL,
  `blog_title` varchar(255) NOT NULL,
  `blog_alias` varchar(255) NOT NULL,
  `blog_promo` text NOT NULL,
  `blog_cover` varchar(255) NOT NULL,
  `blog_content` text NOT NULL,
  `blog_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `blog_id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_blog`
--

INSERT INTO `achi_blog` (`blog_id`, `blog_id_category`, `blog_id_author`, `blog_title`, `blog_alias`, `blog_promo`, `blog_cover`, `blog_content`, `blog_created_date`, `blog_id_status`) VALUES
('1534689799778', 2, 1, 'TÂM THƯ TUYỆT MẬT GỬI CÁC BẠN GROUP', 'tam-thu-tuyet-mat-gui-cac-ban-group', 'Anh là Mr.Share - Người phụng sự tuổi trẻ Việt. Anh đã đồng hành cùng nghề “giáo dục” cho lớp trẻ được hơn 5 năm và tới bây giờ anh đã trải qua rất nhiều việc', 'http://localhost:8080/LandingPage/api/uploads/images/98903e8e1575784e15a11534629600000.jpg', '<p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\"><img class=\"img img-fluid\" src=\"http://localhost:8080/LandingPage/api/uploads/images/98903e8e1575784e15a11534629600000.jpg\" data-mce-src=\"../../api/uploads/images/98903e8e1575784e15a11534629600000.jpg\"></p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Một vài công việc đã và đang làm:</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">- Từng sáng lập CLB Khởi nghiệp thực tiễn cho sinh viên&nbsp;<br>- Từng quản lý chi nhánh, Trainer: Tập đoàn giáo dục quốc tế ECORP&nbsp;<br>- Founder, điều hành: Anh ngữ Max Power<br>- Tham gia hơn 100 các khóa học phát về bản thân<br>- Tác giả: Cuốn da Sống Xứng Đáng<br>- Chinh phục full marathon 42km&nbsp;<br>- Nhà đào tạo phát triển bản thân: đứng training trực tiếp cho hơn 6.000 bạn trẻ về các chủ đề: giao tiếp hiệu quả, thuyết trình, phỏng vấn xin việc, bán hàng, tổ chức sự kiện, mc, phát triển thái độ sống tích cực...</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">----<br>Chưa biết sau này cuộc đời anh sẽ như thế nào, nhưng tới bây giờ thứ giúp anh có động lực sống và làm việc mỗi ngày là sự trăn trở mà chính ngày xưa anh đã gặp phải và đã vượt qua nó:</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">“Làm thế nào để tuổi trẻ sống thật xứng đáng?” (Có ước mơ, có đam mê, có mục tiêu, lạc quan, tích cực, nhiệt huyết, có lòng tự hào dân tộc, đóng góp cho Việt Nam)</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Anh sinh ra ở quê, lúc nhỏ anh là một thằng nhút nhát và rụt rè, các bạn không thể tưởng tượng lớn lên tới năm 18 tuổi còn nhát hơn nữa, không có bất cứ kỹ năng nào, ngay cả việc nói chuyện với “loài người” lúc ấy cũng là một thứ nằm ngoài khả năng của anh.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Người lạ nhát đã không nói ngay cả người thân, hàng xóm anh còn sợ hãi. Các bạn tưởng tượng ai tới nhà anh, ba mẹ dặn là chào hỏi, còn anh im im, ai hỏi gì nói đó, đúng 1 phát. Lúc mà anh đi học về nhà đứng ngoài cổng thấy có khách ở nhà là trong lòng anh sẽ tự nhiên xuất hiện một nỗi sợ người lạ, anh đứng bên ngoài cổng núp ở đâu đó chờ người ta về rồi anh mới vào nhà, nhiều lúc đứng lâu quá không thấy người ta ra lại còn trời nắng thế là anh lủi thủi đi ngõ sau để vào nhà, lén chui vào nhà trong để không phải gặp, ba mẹ anh la anh rất nhiều lần. Lúc ấy “người ta sợ ma, còn anh thì sợ người kinh khủng”. Ngày mà anh lên đại học anh chọn trường đại, học đại, anh hoàn toàn mất định hướng, không biết mình sẽ như thế nào, đi về đâu, sống tiêu cực, mất động lực vào cuộc sống.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Sau đó anh hoàn toàn thay đổi nhờ vào những người thầy, những người bạn, những cuốn sách, quan trọng nhất là những thứ anh làm một cách quyết liệt và bắt đầu có những kết quả thật sự bản thân anh ngày trước chưa từng nghĩ đến.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Mỗi người chúng ta anh tin đều có những kiến thức, kỹ năng, những câu chuyện mình đã vượt qua trong cuộc sống, và điều quan trọng là có sẵn sàng chia sẻ với người khác.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Nên trong GROUP này, anh sẽ bài viết mà anh sưu tầm được, những vài viết anh viết ra từ những trải nghiệm của chính mình và quan trọng hơn là anh hi vọng các bạn có thể chia sẻ phần nào đó những kiến thức của mình. Nếu không thể viết được đơn giản post vài tấm hình. Nếu không post hình được hãy ủng hộ like, tym cho bài viết để người chia sẻ có động lực hơn tiếp tục lan tỏa. Rất cần sự chung tay của các bạn.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Biết đâu đó tình cờ bạn trẻ nào đó đọc được, có chút cảm hứng, động lực hoặc có một bài học giúp cuộc sống tốt hơn. Điều đó thực sự ý nghĩa.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Anh chưa phải là người quá xuất sắc, anh vẫn còn thấy mình có những thiếu sót, và bản thân anh cũng đang từng ngày học tập những người thầy đi trước. Tuy nhiên từ trái tim những điều anh chia sẻ mong muốn giúp đỡ các bạn trẻ, hi vọng bạn có thể là người chia sẻ điều này nếu bạn thấy nó giúp đỡ một chút thôi cho bạn trẻ nào đó ngoài kia để bạn trẻ Việt, sống xứng đáng với tuổi trẻ của mình.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Đọc đến đây, chứng tỏ một điều bạn thật sự muốn tuổi trẻ của mình tuyệt vời hơn. Hãy cmt điều gì đó để chúng ta làm quen với nhau.</p><p style=\"margin: 6px 0px; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Cảm ơn bạn trẻ.</p><p><br></p><p style=\"margin: 6px 0px 0px; display: inline; font-family: Helvetica, Arial, sans-serif; color: rgb(29, 33, 41);\">Mr.Share</p>', '2018-08-19 14:46:11', 2),
('1534691111975', 2, 1, 'HOW TO TURN SETBACKS INTO SUCCESSES', 'how-to-turn-setbacks-into-successes', 'TONY’S PATH TO LEARNING THE POWER OF GRACE AND THAT LIFE IS NOT HAPPENING TO US, BUT FOR US', 'http://localhost:8080/LandingPage/api/uploads/images/0ebae8caa264432f50ac1534629600000.jpg', '<p style=\"box-sizing: inherit; margin: 0px 0px 25px; font-size: 16px; line-height: 1.63; font-kerning: normal; font-family: proxima_nova_regular, Helvetica, san-serif;\">In my experience of interviewing people I have found that it’s rarely a straight line. For many of us, it’s a journey with many twists and turns. When I was five, I knew more than anything else that I wanted to be a fireman. I wanted to save people’s lives. By age seven the dream had evolved: I wanted to be a police artist and draw the pictures to catch the bad guys and help people. Then, by the time I was nine, it was clear to me that I was destined to be a rock star. I wanted to rock the house and give people an experience of feeling alive —&nbsp;<em style=\"box-sizing: inherit;\"><span style=\"box-sizing: inherit; font-weight: 700; line-height: 1.5;\">a feeling they’d never ever forget.</span></em></p><h3 style=\"box-sizing: inherit; font-family: proxima_nova_extrabold, Helvetica, san-serif; font-weight: 500; line-height: 1.1; margin: 13px 0px 1.5rem; font-size: 24px; text-transform: uppercase; font-kerning: normal; letter-spacing: 1px;\"><span style=\"box-sizing: inherit; font-weight: 700;\">MY BASEBALL DREAMS DASHED</span></h3><p style=\"box-sizing: inherit; margin: 0px 0px 25px; font-size: 16px; line-height: 1.63; font-kerning: normal; font-family: proxima_nova_regular, Helvetica, san-serif;\">By the time I was twelve, my father, Jim Robbins, had entered my life. He’d previously been a semi-pro baseball player, and my love for him grew into a total love for the sport. He used to hit me ground balls, literally hundreds of them, on days that were burning hot and smoggy in Glendora, California, just east of L.A. We’d be out there for five or six hours, but much to his chagrin, I just didn’t have the talent to catch the eye of any Dodgers scouts.</p><p style=\"box-sizing: inherit; margin: 0px 0px 25px; font-size: 16px; line-height: 1.63; font-kerning: normal; font-family: proxima_nova_regular, Helvetica, san-serif;\">The grounders would scream at me and pop into my head and I’d be bleeding, and he’d say, “Stay tough, big Tone.” That’s how I learned&nbsp;<em style=\"box-sizing: inherit;\">moxie</em>.</p><p style=\"box-sizing: inherit; margin: 0px 0px 25px; font-size: 16px; line-height: 1.63; font-kerning: normal; font-family: proxima_nova_regular, Helvetica, san-serif;\">When I was in junior high, I tried out for the baseball team. We went through four cuts and when it came to the final cut, I didn’t make it. I just couldn’t hit the curveball. I was completely devastated.&nbsp;<em style=\"box-sizing: inherit;\">What am I going to do with my life?</em>&nbsp;I thought.&nbsp;<em style=\"box-sizing: inherit;\">I’m fourteen and my entire career path has been annihilated! If I can’t make the junior high varsity baseball team, how will I ever make the high school team — much less get a scholarship to USC and then play pro ball? My life is over!</em>&nbsp;I laugh at this thought today but it felt like life and death for me at the time.</p><p style=\"box-sizing: inherit; margin: 0px 0px 25px; font-size: 16px; line-height: 1.63; font-kerning: normal; font-family: proxima_nova_regular, Helvetica, san-serif;\">So I made a very quick shift. I began to ask myself some questions: w<em style=\"box-sizing: inherit;\">hat were the common denominators in all the things that I wanted to do?&nbsp;</em>I wanted to help people in their lives. I wanted to live passionately. I wanted to give people some kind of unforgettable experience. I wanted to be with people and see them to their peak states of celebration and excitement. Well, I might not be the source of it as the athlete who could win the game in the bottom of the ninth, but perhaps I could be the person who augmented the experience of fans and players everywhere, as a writer and sportscaster.</p>', '2018-08-19 15:06:10', 2),
('1534699942205', 2, 1, 'Quick start', 'quick-start', 'Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.', 'http://localhost:8080/LandingPage/api/uploads/images/98903e8e1575784e15a11534629600000.jpg', '<div>JS</div><p>Many of our components require the use of JavaScript to function. Specifically, they require&nbsp;<a href=\"https://jquery.com/\" data-mce-href=\"https://jquery.com/\">jQuery</a>,&nbsp;<a href=\"https://popper.js.org/\" data-mce-href=\"https://popper.js.org/\">Popper.js</a>, and our own JavaScript plugins. Place the following&nbsp;<code>&lt;script&gt;</code>s near the end of your pages, right before the closing&nbsp;<code>&lt;/body&gt;</code>&nbsp;tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p><p>We use&nbsp;<a href=\"https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/\" data-mce-href=\"https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/\">jQuery’s slim build</a>, but the full version is also supported.</p><div><button title=\"\" data-original-title=\"Copy to clipboard\">Copy</button></div><figure><pre><code data-lang=\"html\">&lt;script src=\"<a href=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" data-mce-href=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\">https://code.jquery.com/jquery-3.2.1.slim.min.js</a>\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;\n&lt;script src=\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" data-mce-href=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\">https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js</a>\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;\n&lt;script src=\"<a href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" data-mce-href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\">https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js</a>\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;</code></pre></figure><p>Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p><details open=\"open\"><summary>Show components requiring JavaScript</summary></details><div>Starter template</div><p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p><div><button title=\"\" data-original-title=\"Copy to clipboard\">Copy</button></div><figure><pre><code data-lang=\"html\">&lt;!doctype html&gt;\n&lt;html lang=\"en\"&gt;\n  &lt;head&gt;\n    &lt;!-- Required meta tags --&gt;\n    &lt;meta charset=\"utf-8\"&gt;\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"&gt;\n\n    &lt;!-- Bootstrap CSS --&gt;\n    &lt;link rel=\"stylesheet\" href=\"<a href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" data-mce-href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css</a>\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"&gt;\n\n    &lt;title&gt;Hello, world!&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, world!&lt;/h1&gt;\n\n    &lt;!-- Optional JavaScript --&gt;\n    &lt;!-- jQuery first, then Popper.js, then Bootstrap JS --&gt;\n    &lt;script src=\"<a href=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" data-mce-href=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\">https://code.jquery.com/jquery-3.2.1.slim.min.js</a>\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;\n    &lt;script src=\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" data-mce-href=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\">https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js</a>\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;\n    &lt;script src=\"<a href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" data-mce-href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\">https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js</a>\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"&gt;&lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre></figure><p>That’s all you need for overall page requirements. Visit the&nbsp;<a href=\"https://getbootstrap.com/docs/4.0/layout/overview/\" data-mce-href=\"https://getbootstrap.com/docs/4.0/layout/overview/\">Layout docs</a>&nbsp;or&nbsp;<a href=\"https://getbootstrap.com/docs/4.0/examples/\" data-mce-href=\"https://getbootstrap.com/docs/4.0/examples/\">our official examples</a>to start laying out your site’s content and components.</p>', '2018-08-19 17:33:18', 3),
('1534700007494', 2, 1, 'Chúng ta cần gì khi còn ở giảng đường', 'chung-ta-can-gi-khi-con-o-giang-duong', 'Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.', 'http://localhost:8080/LandingPage/api/uploads/images/98903e8e1575784e15a11534629600000.jpg', '<div>HTML5 doctype</div><p>Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.</p><div><button title=\"\" data-original-title=\"Copy to clipboard\">Copy</button></div><figure><pre><code data-lang=\"html\">&lt;!doctype html&gt;\n&lt;html lang=\"en\"&gt;\n  ...\n&lt;/html&gt;</code></pre></figure>', '2018-08-19 17:33:57', 3),
('1534775734034', 5, 1, 'Tưởng là xoài nhưng khi bổ ra bạn sẽ hiểu rằng đôi khi đừng tin vào mắt mình', 'tuong-la-xoai-nhung-khi-bo-ra-ban-se-hieu-rang-doi-khi-dung-tin-vao-mat-minh', 'Bạn nghĩ nó là xoài? Hãy đợi đến lúc chúng ta bổ nó ra.', 'http://localhost:8080/LandingPage/api/uploads/images/9ffb35895bd3b65578541534716000000.jpg', '<p><span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"Tr\" data-mce-index=\"0\">Tr</span>ướ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"c\" data-mce-index=\"1\">c</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"khi\" data-mce-index=\"2\">khi</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"vào\" data-mce-index=\"3\">vào</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"v\" data-mce-index=\"4\">v</span>ấ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"n\" data-mce-index=\"5\">n</span> đề, <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"hãy\" data-mce-index=\"6\">hãy</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"nhìn\" data-mce-index=\"7\">nhìn</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"vào\" data-mce-index=\"8\">vào</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"b\" data-mce-index=\"9\">b</span>ứ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"c\" data-mce-index=\"10\">c</span> ả<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"nh\" data-mce-index=\"11\">nh</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"này\" data-mce-index=\"12\">này</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"và\" data-mce-index=\"13\">và</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"tr\" data-mce-index=\"14\">tr</span>ả <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"l\" data-mce-index=\"15\">l</span>ờ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"i\" data-mce-index=\"16\">i</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"xem\" data-mce-index=\"17\">xem</span>, đ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ây\" data-mce-index=\"18\">ây</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"là\" data-mce-index=\"19\">là</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"qu\" data-mce-index=\"20\">qu</span>ả <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"gì\" data-mce-index=\"21\">gì</span>?</p><div><div><a title=\"\" href=\"https://kenh14cdn.com/2018/8/20/paw-pawsss505975732-1534759544608134524998.jpg\" target=\"_blank\" rel=\"noopener\" data-fancybox-group=\"img-lightbox\" data-mce-href=\"https://kenh14cdn.com/2018/8/20/paw-pawsss505975732-1534759544608134524998.jpg\"><img id=\"img_9dd7c760-a460-11e8-b8c6-6dd3affa8e39\" style=\"border-width: 0px; border-image-width: initial; line-height: inherit; width: 580px; max-width: 100%;\" title=\"Tưởng là xoài nhưng khi bổ ra bạn sẽ hiểu rằng đôi khi đừng tin vào mắt mình - Ảnh 1.\" src=\"https://kenh14cdn.com/2018/8/20/paw-pawsss505975732-1534759544608134524998.jpg\" alt=\"Tưởng là xoài nhưng khi bổ ra bạn sẽ hiểu rằng đôi khi đừng tin vào mắt mình - Ảnh 1.\" width=\"\" height=\"\" data-original=\"https://kenh14cdn.com/2018/8/20/paw-pawsss505975732-1534759544608134524998.jpg\" data-mce-src=\"https://kenh14cdn.com/2018/8/20/paw-pawsss505975732-1534759544608134524998.jpg\" data-mce-style=\"border-width: 0px; border-image-width: initial; line-height: inherit; width: 580px; max-width: 100%;\"></a></div><div>Thanh Phương tâm sự:&nbsp;<em>“Mình bắt đầu yêu thích xe máy từ khi còn nhỏ xíu được mẹ chở đi học trên chiếc xe cào cào. Khi lớn lên mình muốn có chiếc xe của riêng mình để tự cầm lái, tự điều khiển tốc độ. Mình gặp Exciter là yêu luôn vì cảm giác lái rất “đã”, xe lại gọn, dáng thể thao, phù hợp với công việc phải di chuyển liên tục như mình”</em>. </div></div>', '2018-08-20 14:36:36', 2),
('1534775837415', 1, 6, 'Tưởng là xoài nhưng khi bổ ra bạn sẽ hiểu rằng đôi khi đừng tin vào mắt mình', 'tuong-la-xoai-nhung-khi-bo-ra-ban-se-hieu-rang-doi-khi-dung-tin-vao-mat-minh', 'Tưởng là xoài nhưng khi bổ ra bạn sẽ hiểu rằng đôi khi đừng tin vào mắt mình', 'http://localhost:8080/LandingPage/api/uploads/images/0ebae8caa264432f50ac1534629600000.jpg', '<p><a href=\"http://localhost:8080/LandingPage/manager/blog/detail/1534775734034-tuong-la-xoai-nhung-khi-bo-ra-ban-se-hieu-rang-doi-khi-dung-tin-vao-mat-minh\" data-mce-href=\"detail/1534775734034-tuong-la-xoai-nhung-khi-bo-ra-ban-se-hieu-rang-doi-khi-dung-tin-vao-mat-minh\"><span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"T\" data-mce-index=\"0\">T</span>ưở<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ng\" data-mce-index=\"1\">ng</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"là\" data-mce-index=\"2\">là</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"xoài\" data-mce-index=\"3\">xoài</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"nh\" data-mce-index=\"4\">nh</span>ư<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ng\" data-mce-index=\"5\">ng</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"khi\" data-mce-index=\"6\">khi</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"b\" data-mce-index=\"7\">b</span>ổ <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ra\" data-mce-index=\"8\">ra</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"b\" data-mce-index=\"9\">b</span>ạ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"n\" data-mce-index=\"10\">n</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"s\" data-mce-index=\"11\">s</span>ẽ hiể<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"u\" data-mce-index=\"12\">u</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"r\" data-mce-index=\"13\">r</span>ằ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ng\" data-mce-index=\"14\">ng</span> đ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ôi\" data-mce-index=\"15\">ôi</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"khi\" data-mce-index=\"16\">khi</span> đừ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"ng\" data-mce-index=\"17\">ng</span> tin <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"vào\" data-mce-index=\"18\">vào</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"m\" data-mce-index=\"19\">m</span>ắ<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"t\" data-mce-index=\"20\">t</span> <span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"mình\" data-mce-index=\"21\">mình</span></a></p><p><img class=\"img img-fluid\" src=\"http://localhost:8080/LandingPage/api/uploads/images/12f8eefc29320dde76bc1534888800000.jpg\" data-mce-src=\"../api/uploads/images/12f8eefc29320dde76bc1534888800000.jpg\" width=\"293\" height=\"384\"></p>', '2018-08-20 14:37:42', 2),
('1536365459453', 1, 1, 'Hello', 'hello', 'Hello', 'http://localhost:8080/Achi/api/uploads/images/9d6cc0e724414edaef38.png', '<p><span style=\"font-size: 72pt; color: rgb(255, 0, 0);\" data-mce-style=\"font-size: 72pt; color: #ff0000;\">assdssa</span></p>', '2018-09-08 00:10:59', 1),
('7369312', 1, 1, 'George deo...ss', 'george-deo-ss', 'George deo...sss', 'http://localhost:8080/Achi/api/uploads/images/feeee8759a7ba395df1f.jpg', '<p><img class=\"img-responsive\" src=\"http://localhost:8080/Achi/api/uploads/images/9d6cc0e724414edaef38.png\" data-mce-src=\"../../api/uploads/images/9d6cc0e724414edaef38.png\"></p>', '2018-09-06 16:03:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `achi_category`
--

CREATE TABLE `achi_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_alias` varchar(255) NOT NULL,
  `category_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_category`
--

INSERT INTO `achi_category` (`category_id`, `category_name`, `category_alias`, `category_created_date`) VALUES
(1, 'Sống khoẻ', 'song-khoe', '2018-08-18 06:56:58'),
(2, 'Sống đẹp nè', 'song-dep-ne', '2018-08-18 06:58:30'),
(5, 'Ăn uống', 'an-uong', '2018-08-21 16:51:37');

-- --------------------------------------------------------

--
-- Table structure for table `achi_content_element`
--

CREATE TABLE `achi_content_element` (
  `content_element_id` int(11) NOT NULL,
  `content_element_id_detail_ui` int(11) NOT NULL,
  `content_element_id_source` int(11) NOT NULL,
  `content_element_attribute` varchar(255) DEFAULT NULL,
  `content_element_attribute_src` varchar(255) DEFAULT NULL,
  `content_element_data` text,
  `content_element_class` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_content_element`
--

INSERT INTO `achi_content_element` (`content_element_id`, `content_element_id_detail_ui`, `content_element_id_source`, `content_element_attribute`, `content_element_attribute_src`, `content_element_data`, `content_element_class`) VALUES
(73, 158, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/6.jpg', NULL, NULL),
(74, 161, 1, NULL, NULL, 'Chào bạn,<br><br>\nXin được tự giới thiệu tôi là doanh nhân – diễn giả Trần Đăng Khoa. Năm 2009, sau nhiều lần thất bại và nợ nần lên tới gần 5 tỉ đồng, tôi vẫn quyết định đầu tư hơn $10.000 để học những khóa học mà trường Đại học chắc chắn đã không dạy. Đến năm 2010 thì tôi đã trả được hết các khoản nợ nần và bắt đầu có tên tuổi ở Việt Nam. Sau hơn 10 năm sinh sống và làm việc tại Singapore, tôi trở về Việt Nam để khởi nghiệp và đạt được những thành công nhất định khi phát triển TGM từ một tập đoàn chỉ có 3 thành viên sáng lập ban đầu tiến lên thành một tổ chức có khoảng 200 thành viên hiện nay.\n<br><br>\nTừ năm 2009 đến nay, có rất nhiều người khi gặp tôi đều hỏi: “Tại sao anh và TGM không mở một khóa học dạy làm giàu? Ai cũng thích làm giàu, đó là nhu cầu chung. Ở Việt Nam các khóa học dạy làm giàu đang mọc lên như nấm kìa.”\n<br><br>\nCó một điểm chung tôi nhìn thấy ở nhiều khóa học làm giàu đó là có vẻ người ta nhấn mạnh vào vế “giàu” nhiều hơn là vế “làm”. Điều này về mặt quảng cáo có thể hiệu quả cho đơn vị tổ chức, nhưng để công bằng hơn cho người học, chúng ta cần vế “làm” được nhắc đến nhiều hơn.', NULL),
(75, 163, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/banner_1.jpg', NULL, NULL),
(76, 167, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/banner_2.jpg', NULL, NULL),
(77, 166, 1, NULL, NULL, 'Bất kể khóa học làm giàu nào, khi càng đi xa khỏi vế “làm” và càng nhấn mạnh vế “giàu” cùng với việc thêm thắt các gia vị “nhanh”, “dễ dàng”, “không cần làm”,… đều có thể nói là đã đi vào vùng xám của kinh doanh. Nếu không có sự tiết chế thì có thể chưa sai pháp luật nhưng vấn đề đạo đức kinh doanh và lương tâm của người làm đào tạo thì rất đáng quan ngại. Tư duy của người làm giàu thực thụ phải là tư duy đầu tư, trong đó muốn giàu thì trước hết phải biết đầu tư vào kiến thức. Nhưng nếu bỏ tiền để mua những lời hứa “nhanh”, “dễ dàng”, “không cần làm”,… thì đó là khi mỗi người phải suy nghĩ kỹ lại, đấy không phải là tư duy của người làm giàu mà là tư duy của người mơ giàu, thích giàu.\n\nĐã 7 năm qua, tôi luôn ấp ủ về một dự án mang tên “Làm Giàu 4.0” – bao gồm một khóa học Làm Giàu 4.0 và một quyển sách cùng tên nhấn mạnh vào cái LÀM. Đến nay, tôi đã thực hiện được một phần dự án khi cho ra đời khóa học Làm Giàu 4.0 với Crypto, và quyển sách tôi và cộng sự của mình đang trong giai đoạn hoàn thành.', NULL),
(78, 168, 1, NULL, NULL, 'VÌ SAO CÓ TÊN GỌI “LÀM GIÀU 4.0 với CRYPTO”?', 'paddingY-128'),
(79, 173, 1, NULL, NULL, 'Trong sự chuyển mình theo cấp số nhân của cuộc Cách Mạng Công Nghiệp 4.0, chỉ trong năm 2017 vừa qua, chắc hẳn chúng ta đã chứng kiến rất nhiều sự thay đổi như vũ bão của xã hội loài người từ cơn dậy sóng của tiền mã hóa, sự vượt trội của trí thông minh nhân tạo (AI) cho đến những phát minh về khoa học – công nghệ dự báo một tương lai gần đa số các công việc mang tính chất phổ thông và quy trình sẽ bị robot thay thế hoàn toàn. Thế giới mà chúng ta đang sống hôm nay đã thay đổi rất nhiều so với thế giới cách đây 5, 10 năm, và sẽ còn liên tục thay đổi không ngừng với những thách thức và cơ hội to lớn.\n\nDo vậy, tư duy làm giàu trong thế kỷ 21 và đặc biệt trong thời đại Cách mạng Công nghiệp 4.0 cần phải được cập nhật để đón đầu xu thế của thời đại trong sự bùng nổ của công nghệ và thích ứng với môi trường thực tế đầy cạnh tranh hiện nay.\n\nKhi đọc những dòng này, tôi muốn dành cho bạn một cơ hội đặc biệt được trải nghiệm một trong những khóa học chất lượng hàng đầu TGM thông qua buổi học thử khóa học Làm Giàu 4.0 với Crypto hoàn toàn miễn phí.  ', NULL),
(80, 175, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/ebook2.png', NULL, NULL),
(81, 170, 1, NULL, NULL, 'DOANH NHÂN – DIỄN GIẢ TRẦN ĐĂNG KHOA SẼ GIÚP BẠN XÂY DỰNG TƯ DUY LÀM GIÀU THỜI ĐẠI SỐ VỚI BUỔI HỌC THỬ “LÀM GIÀU 4.0 với CRYPTO”', 'paddingY-128'),
(82, 178, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/banner_1.jpg', NULL, NULL),
(83, 179, 1, NULL, NULL, 'Doanh nhân – Diễn giả\nTRẦN ĐĂNG KHOA', NULL),
(84, 181, 1, NULL, NULL, 'CEO của TGM CORP và UBRAND.', NULL),
(85, 182, 1, NULL, NULL, 'Chứng nhận Master Trainer.', NULL),
(86, 183, 1, NULL, NULL, 'Hơn 10.000 giờ diễn thuyết trong 7 năm.', NULL),
(87, 184, 1, NULL, NULL, 'Kinh nghiệm đào tạo cho hơn 120.000 học viên.', NULL),
(88, 185, 1, NULL, NULL, 'Dịch giả của hơn 20 tựa sách với hơn 1.000.000 độc giả.', NULL),
(89, 172, 1, NULL, NULL, 'CHƯƠNG TRÌNH SẼ GIÚP GÌ CHO BẠN?', 'paddingY-128'),
(90, 193, 1, NULL, NULL, 'Tìm ra động lực thật sự để đi theo con đường làm giàu.', NULL),
(91, 194, 1, NULL, NULL, 'Điểm khác biệt giữa nhóm “người thường” và nhóm “người giàu”.', NULL),
(92, 195, 1, NULL, NULL, 'Khám phá 10 lĩnh vực hái ra tiền trong Cách mạng công nghiệp 4.0.', NULL),
(93, 196, 1, NULL, NULL, 'Nền tảng cốt lõi của tư duy làm giàu bền vững.', NULL),
(94, 197, 1, NULL, NULL, 'Cơ hội tiếp cận cuộc cách mạng Blockchain / Crypto đang dậy sóng gần đây.', NULL),
(95, 198, 1, NULL, NULL, 'Chiến lược làm giàu với crypto assets (tài sản mã hóa).', NULL),
(96, 199, 1, NULL, NULL, 'So sánh Bitcoin, vàng và tiền và hiểu về bản chất thật sự của “tiền”.', NULL),
(97, 200, 1, 'src', 'http://localhost:8080/Achi/template/public/images/client/banner_2.jpg', NULL, NULL),
(98, 187, 1, NULL, NULL, '“NẾU BẠN SINH RA TRONG NGHÈO KHÓ, ĐÓ KHÔNG PHẢI LÀ LỖI CỦA BẠN. NHƯNG NẾU BẠN CHẾT TRONG NGHÈO KHÓ, THÌ ĐÓ LÀ LỖI CỦA BẠN.” (BILL GATES)', 'paddingY-128'),
(99, 189, 1, NULL, NULL, 'ĐẲNG CẤP và CHẤT LƯỢNG được cam kết bởi TGM', 'paddingY-128'),
(100, 211, 1, NULL, NULL, '', ' icon-cup'),
(101, 214, 1, NULL, NULL, '', ' icon-cup'),
(102, 217, 1, NULL, NULL, '', ' icon-cup'),
(103, 220, 1, NULL, NULL, '', ' icon-cup'),
(104, 212, 1, NULL, NULL, 'VÌ 1 TRIỆU NGƯỜI VIỆT NAM', NULL),
(105, 213, 1, NULL, NULL, 'Các sản phẩm của TGM đều hướng đến sự CHẤT LƯỢNG. Cho nên mặc dù hội thảo này nằm trong chương trình “Vì 1 triệu người Việt Nam hạnh phúc và thành công hơn” và bạn được hỗ trợ 95-100% chi phí tham dự, nhưng chất lượng vẫn sẽ được đặt lên hàng đầu.', NULL),
(106, 215, 1, NULL, NULL, 'PHÒNG ĐÀO TẠO ĐẠT CHUẨN QUỐC TẾ', NULL),
(107, 216, 1, NULL, NULL, 'TGM tự hào là tổ chức đầu tiên và duy nhất tại Việt Nam dám đầu tư và sở hữu 2 hội trường (tại TP.HCM và Hà Nội) được thiết kế đặc biệt và trang bị âm thanh, ánh sáng theo đúng các chuẩn mực quốc tế về hội trường phục vụ huấn luyện và đào tạo kỹ năng.', NULL),
(108, 218, 1, NULL, NULL, 'ĐỘI NGŨ TỔ CHỨC CHUYÊN NGHIỆP', NULL),
(109, 219, 1, NULL, NULL, 'Để đảm bảo chất lượng cao nhất của từng khóa học, đội ngũ tổ chức giàu kinh nghiệm, được tuyển chọn kỹ lưỡng của TGM luôn làm việc bằng tất cả nhiệt huyết và tinh thần trách nhiệm cao nhất. Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.', NULL),
(110, 221, 1, NULL, NULL, 'ƯU ĐÃI ĐẶC BIỆT TẠI HỘI THẢO', NULL),
(111, 222, 1, NULL, NULL, 'Tại chương trình, bạn có thể mua các tựa sách bán chạy nhất hiện nay với giá giảm 25% hoặc combo sách với giá giảm 40%. Bên cạnh đó, bạn cũng có thể đăng ký tham gia các khóa học hữu ích của TGM với những chính sách ưu đãi đặc biệt.', NULL),
(112, 160, 1, NULL, NULL, NULL, 'paddingY-128'),
(113, 164, 1, NULL, NULL, NULL, 'paddingY-128'),
(114, 169, 1, NULL, NULL, NULL, 'paddingY-128'),
(115, 171, 1, NULL, NULL, NULL, 'paddingY-128'),
(116, 206, 1, NULL, NULL, NULL, 'paddingY-128');

-- --------------------------------------------------------

--
-- Table structure for table `achi_date_source`
--

CREATE TABLE `achi_date_source` (
  `date_source_id` int(11) NOT NULL,
  `date_source_id_sche` int(11) NOT NULL,
  `date_source_time` varchar(255) NOT NULL,
  `date_source_stt` int(11) NOT NULL,
  `date_source_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_date_source`
--

INSERT INTO `achi_date_source` (`date_source_id`, `date_source_id_sche`, `date_source_time`, `date_source_stt`, `date_source_created_date`) VALUES
(1, 1, '<p>Khai giảng: 28/09/2018</p><p>Ngày 28-29-30 (09:00 - 18:00) </p>', 2, '2018-09-01 09:21:14'),
(2, 1, '<p><span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"Th\" data-mce-index=\"0\">Th</span>ứ Bả<span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"y\" data-mce-index=\"1\">y</span> 15/12/18 </p><p><span class=\"mce-spellchecker', 1, '2018-09-01 09:19:46'),
(3, 1, '<p><span class=\"mce-spellchecker-word\" data-mce-bogus=\"1\" data-mce-word=\"Th\" data-mce-index=\"0\">Th</span>ứ 3 ngày 03/09/2018</p>', 0, '2018-09-01 07:59:04'),
(4, 1, '<p>27/02/2018 0</p>', 3, '2018-09-01 09:44:14'),
(5, 2, '<p>Khai&nbsp;giảng vào ngày 25 tháng 10</p>', 1, '2018-09-01 09:49:15'),
(6, 3, '<ol><li><strong><span style=\"color: rgb(255, 0, 0);\" data-mce-style=\"color: #ff0000;\">Khai giảng</span></strong>: 09-08-2018</li></ol>', 0, '2018-09-02 02:39:19');

-- --------------------------------------------------------

--
-- Table structure for table `achi_detail_ui`
--

CREATE TABLE `achi_detail_ui` (
  `detail_ui_id` int(11) NOT NULL,
  `detail_ui_id_element` int(11) NOT NULL,
  `detail_ui_id_ui` int(11) NOT NULL,
  `detail_ui_random_id` varchar(255) NOT NULL,
  `detail_ui_css` text,
  `detail_ui_stt` int(11) NOT NULL DEFAULT '0',
  `detail_ui_status` tinyint(1) NOT NULL DEFAULT '0',
  `detail_ui_parent_id` int(11) DEFAULT NULL,
  `detail_ui_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_detail_ui`
--

INSERT INTO `achi_detail_ui` (`detail_ui_id`, `detail_ui_id_element`, `detail_ui_id_ui`, `detail_ui_random_id`, `detail_ui_css`, `detail_ui_stt`, `detail_ui_status`, `detail_ui_parent_id`, `detail_ui_created_date`) VALUES
(156, 17, 1, 'col-xs-12-id-1536078313583', NULL, 0, 0, NULL, '2018-09-04 16:25:13'),
(157, 5, 1, 'row-id-1536078325093', NULL, 0, 0, 156, '2018-09-04 16:25:25'),
(158, 30, 1, 'img-id-1536078329222', '#img-id-1536078329222 {width:100%}', 0, 0, 157, '2018-09-04 16:40:34'),
(159, 4, 1, 'container-id-1536078335181', NULL, 0, 0, 156, '2018-09-04 16:25:35'),
(160, 5, 1, 'row-id-1536078340093', ' ', 0, 0, 159, '2018-09-04 17:11:20'),
(161, 23, 1, 'col-sm-6-id-1536078354197', NULL, 0, 0, 160, '2018-09-04 16:25:54'),
(162, 23, 1, 'col-sm-6-id-1536078361549', NULL, 0, 0, 160, '2018-09-04 17:07:25'),
(163, 30, 1, 'img-id-1536078366924', NULL, 0, 0, 162, '2018-09-04 16:26:06'),
(164, 5, 1, 'row-id-1536078375757', NULL, 0, 0, 159, '2018-09-04 16:26:15'),
(165, 23, 1, 'col-sm-6-id-1536078380605', NULL, 0, 0, 164, '2018-09-04 16:26:20'),
(166, 23, 1, 'col-sm-6-id-1536078380789', NULL, 0, 0, 164, '2018-09-04 16:26:20'),
(167, 30, 1, 'img-id-1536078394662', NULL, 0, 0, 165, '2018-09-04 16:26:34'),
(168, 5, 1, 'row-id-1536078414692', NULL, 0, 0, 159, '2018-09-04 16:26:54'),
(169, 5, 1, 'row-id-1536078418373', NULL, 0, 0, 159, '2018-09-04 16:26:58'),
(170, 5, 1, 'row-id-1536078418549', NULL, 0, 0, 159, '2018-09-04 16:26:58'),
(171, 5, 1, 'row-id-1536078418733', NULL, 0, 0, 159, '2018-09-04 16:26:58'),
(172, 5, 1, 'row-id-1536078418909', NULL, 0, 0, 159, '2018-09-04 16:26:58'),
(173, 23, 1, 'col-sm-6-id-1536078441108', NULL, 0, 0, 169, '2018-09-04 16:27:21'),
(174, 23, 1, 'col-sm-6-id-1536078441260', NULL, 0, 0, 169, '2018-09-04 16:27:21'),
(175, 30, 1, 'img-id-1536078450860', NULL, 0, 0, 174, '2018-09-04 16:27:30'),
(176, 23, 1, 'col-sm-6-id-1536078473852', NULL, 0, 0, 171, '2018-09-04 16:27:53'),
(177, 23, 1, 'col-sm-6-id-1536078474028', NULL, 0, 0, 171, '2018-09-04 16:27:54'),
(178, 30, 1, 'img-id-1536078479035', NULL, 0, 0, 176, '2018-09-04 16:27:59'),
(179, 36, 1, 'p-id-1536078488547', NULL, 0, 0, 177, '2018-09-04 16:28:08'),
(180, 45, 1, 'ul-id-1536078501724', NULL, 0, 0, 177, '2018-09-04 16:28:21'),
(181, 46, 1, 'li-id-1536078506523', NULL, 0, 0, 180, '2018-09-04 16:28:26'),
(182, 46, 1, 'li-id-1536078506739', NULL, 0, 0, 180, '2018-09-04 16:28:26'),
(183, 46, 1, 'li-id-1536078506932', NULL, 0, 0, 180, '2018-09-04 16:28:26'),
(184, 46, 1, 'li-id-1536078507108', NULL, 0, 0, 180, '2018-09-04 16:28:27'),
(185, 46, 1, 'li-id-1536078507284', NULL, 0, 0, 180, '2018-09-04 16:28:27'),
(186, 5, 1, 'row-id-1536078527587', NULL, 0, 0, 159, '2018-09-04 16:28:47'),
(187, 5, 1, 'row-id-1536078527764', NULL, 0, 0, 159, '2018-09-04 16:28:47'),
(188, 5, 1, 'row-id-1536078527931', NULL, 0, 0, 159, '2018-09-04 16:28:47'),
(189, 5, 1, 'row-id-1536078528099', NULL, 0, 0, 159, '2018-09-04 16:28:48'),
(190, 25, 1, 'col-sm-8-id-1536078546043', NULL, 0, 0, 186, '2018-09-04 16:29:06'),
(191, 21, 1, 'col-sm-4-id-1536078546483', NULL, 0, 0, 186, '2018-09-04 16:29:06'),
(192, 45, 1, 'ul-id-1536078556219', NULL, 0, 0, 190, '2018-09-04 16:29:16'),
(193, 46, 1, 'li-id-1536078559547', NULL, 0, 0, 192, '2018-09-04 16:29:19'),
(194, 46, 1, 'li-id-1536078559715', NULL, 0, 0, 192, '2018-09-04 16:29:19'),
(195, 46, 1, 'li-id-1536078559876', NULL, 0, 0, 192, '2018-09-04 16:29:19'),
(196, 46, 1, 'li-id-1536078560035', NULL, 0, 0, 192, '2018-09-04 16:29:20'),
(197, 46, 1, 'li-id-1536078560220', NULL, 0, 0, 192, '2018-09-04 16:29:20'),
(198, 46, 1, 'li-id-1536078566659', NULL, 0, 0, 192, '2018-09-04 16:29:26'),
(199, 46, 1, 'li-id-1536078566995', NULL, 0, 0, 192, '2018-09-04 16:29:27'),
(200, 30, 1, 'img-id-1536078575835', NULL, 0, 0, 191, '2018-09-04 16:29:35'),
(201, 20, 1, 'col-sm-3-id-1536078616386', NULL, 0, 0, 188, '2018-09-04 16:30:16'),
(202, 20, 1, 'col-sm-3-id-1536078616603', NULL, 0, 0, 188, '2018-09-04 16:30:16'),
(203, 20, 1, 'col-sm-3-id-1536078616795', NULL, 0, 0, 188, '2018-09-04 16:30:16'),
(204, 20, 1, 'col-sm-3-id-1536078617004', NULL, 0, 0, 188, '2018-09-04 16:30:17'),
(206, 5, 1, 'row-id-1536078639346', NULL, 0, 0, 159, '2018-09-04 16:30:39'),
(207, 23, 1, 'col-sm-6-id-1536078651811', NULL, 0, 0, 206, '2018-09-04 16:30:51'),
(208, 23, 1, 'col-sm-6-id-1536078652226', NULL, 0, 0, 206, '2018-09-04 16:30:52'),
(209, 23, 1, 'col-sm-6-id-1536078652706', NULL, 0, 0, 206, '2018-09-04 16:30:52'),
(210, 23, 1, 'col-sm-6-id-1536078657115', NULL, 0, 0, 206, '2018-09-04 16:30:57'),
(211, 49, 1, 'i-id-1536078664226', NULL, 0, 0, 207, '2018-09-04 16:31:04'),
(212, 36, 1, 'p-id-1536078668130', NULL, 0, 0, 207, '2018-09-04 16:31:08'),
(213, 36, 1, 'p-id-1536078674778', NULL, 0, 0, 207, '2018-09-04 16:31:14'),
(214, 49, 1, 'i-id-1536078680226', NULL, 0, 0, 208, '2018-09-04 16:31:20'),
(215, 36, 1, 'p-id-1536078680841', NULL, 0, 0, 208, '2018-09-04 16:31:20'),
(216, 36, 1, 'p-id-1536078681010', NULL, 0, 0, 208, '2018-09-04 16:31:21'),
(217, 49, 1, 'i-id-1536078685361', NULL, 0, 0, 209, '2018-09-04 16:31:25'),
(218, 36, 1, 'p-id-1536078686313', NULL, 0, 0, 209, '2018-09-04 16:31:26'),
(219, 36, 1, 'p-id-1536078690506', NULL, 0, 0, 209, '2018-09-04 16:31:30'),
(220, 49, 1, 'i-id-1536078695953', NULL, 0, 0, 210, '2018-09-04 16:31:36'),
(221, 36, 1, 'p-id-1536078696762', NULL, 0, 0, 210, '2018-09-04 16:31:36'),
(222, 36, 1, 'p-id-1536078696954', NULL, 0, 0, 210, '2018-09-04 16:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `achi_element`
--

CREATE TABLE `achi_element` (
  `element_id` int(11) NOT NULL,
  `element_name` varchar(255) NOT NULL,
  `element_tag` varchar(255) NOT NULL,
  `element_real_id` varchar(255) NOT NULL,
  `element_class` varchar(255) NOT NULL,
  `element_type` tinyint(1) NOT NULL DEFAULT '0',
  `element_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_element`
--

INSERT INTO `achi_element` (`element_id`, `element_name`, `element_tag`, `element_real_id`, `element_class`, `element_type`, `element_created_date`) VALUES
(4, 'Container', 'div', 'container-id', 'container', 0, '2018-08-27 13:58:34'),
(5, 'Row', 'div', 'row-id', 'row', 0, '2018-08-27 13:58:34'),
(6, 'Col-xs-1', 'div', 'col-xs-1-id', 'col-xs-1', 0, '2018-08-27 14:00:05'),
(7, 'Col-xs-2', 'div', 'col-xs-2-id', 'col-xs-2', 0, '2018-08-27 14:00:05'),
(8, 'Col-xs-3', 'div', 'col-xs-3-id', 'col-xs-3', 0, '2018-08-27 14:01:24'),
(9, 'Col-xs-4', 'div', 'col-xs-4-id', 'col-xs-4', 0, '2018-08-27 14:01:24'),
(10, 'Col-xs-5', 'div', 'col-xs-5-id', 'col-xs-5', 0, '2018-08-27 14:03:14'),
(11, 'Col-xs-6', 'div', 'col-xs-6-id', 'col-xs-6', 0, '2018-08-27 14:03:14'),
(12, 'Col-xs-7', 'div', 'col-xs-7-id', 'col-xs-7', 0, '2018-08-27 14:03:14'),
(13, 'Col-xs-8', 'div', 'col-xs-8-id', 'col-xs-8', 0, '2018-08-27 14:03:14'),
(14, 'Col-xs-9', 'div', 'col-xs-9-id', 'col-xs-9', 0, '2018-08-27 14:03:14'),
(15, 'Col-xs-10', 'div', 'col-xs-10-id', 'col-xs-10', 0, '2018-08-27 14:03:14'),
(16, 'Col-xs-11', 'div', 'col-xs-11-id', 'col-xs-11', 0, '2018-08-27 14:03:14'),
(17, 'Col-xs-12', 'div', 'col-xs-12-id', 'col-xs-12', 0, '2018-08-27 14:03:14'),
(18, 'Col-sm-1', 'div', 'col-sm-1-id', 'col-sm-1', 0, '2018-08-27 14:05:25'),
(19, 'Col-sm-2', 'div', 'col-sm-2-id', 'col-sm-2', 0, '2018-08-27 14:05:25'),
(20, 'Col-sm-3', 'div', 'col-sm-3-id', 'col-sm-3', 0, '2018-08-27 14:05:25'),
(21, 'Col-sm-4', 'div', 'col-sm-4-id', 'col-sm-4', 0, '2018-08-27 14:05:25'),
(22, 'Col-sm-5', 'div', 'col-sm-5-id', 'col-sm-5', 0, '2018-08-27 14:05:25'),
(23, 'Col-sm-6', 'div', 'col-sm-6-id', 'col-sm-6', 0, '2018-08-27 14:05:25'),
(24, 'Col-sm-7', 'div', 'col-sm-7-id', 'col-sm-7', 0, '2018-08-27 14:05:25'),
(25, 'Col-sm-8', 'div', 'col-sm-8-id', 'col-sm-8', 0, '2018-08-27 14:05:25'),
(26, 'Col-sm-9', 'div', 'col-sm-9-id', 'col-sm-9', 0, '2018-08-27 14:05:25'),
(27, 'Col-sm-10', 'div', 'col-sm-10-id', 'col-sm-10', 0, '2018-08-27 14:05:25'),
(28, 'Col-sm-11', 'div', 'col-sm-11-id', 'col-sm-11', 0, '2018-08-27 14:05:25'),
(29, 'Col-sm-12', 'div', 'col-sm-12-id', 'col-sm-12', 0, '2018-08-27 14:05:25'),
(30, 'Image', 'img', 'img-id', 'img-responsive', 1, '2018-08-29 10:50:50'),
(31, 'Button', 'button', 'button-id', 'btn', 0, '2018-08-29 10:51:12'),
(32, 'Button Lg', 'button', 'button-lg-id', 'btn btn-lg', 0, '2018-08-29 10:51:10'),
(33, 'Button Md', 'button', 'button-md-id', 'btn btn-md', 0, '2018-08-29 10:51:08'),
(34, 'Button Sm', 'button', 'button-sm-id', 'btn btn-sm', 0, '2018-08-29 10:51:06'),
(35, 'Button Xs', 'button', 'button-xs-id', 'btn btn-xs', 0, '2018-08-27 14:08:58'),
(36, 'P', 'p', 'p-id', 'p', 0, '2018-08-27 14:10:16'),
(37, 'H1', 'h1', 'h1-id', 'h1', 0, '2018-08-27 14:11:19'),
(38, 'H2', 'h2', 'h2-id', 'h2', 0, '2018-08-27 14:11:19'),
(39, 'H3', 'h3', 'h3-id', 'h3', 0, '2018-08-27 14:11:19'),
(40, 'H4', 'h4', 'h4-id', 'h4', 0, '2018-08-27 14:11:19'),
(41, 'H5', 'h5', 'h5-id', 'h5', 0, '2018-08-27 14:11:19'),
(42, 'H6', 'h6', 'h6-id', 'h6', 0, '2018-08-27 14:11:19'),
(43, 'Hr', 'hr', 'hr-id', 'hr', 1, '2018-08-29 10:51:42'),
(44, 'Iframe', 'iframe', 'iframe-id', 'iframe', 1, '2018-08-29 10:51:37'),
(45, 'Ul', 'ul', 'ul-id', 'ul', 0, '2018-08-27 14:13:28'),
(46, 'Li', 'li', 'li-id', 'li', 0, '2018-08-27 14:13:28'),
(47, 'Ol', 'ol', 'ol-id', 'ol', 0, '2018-08-27 14:13:28'),
(48, 'Span', 'span', 'span-id', 'span', 0, '2018-08-27 14:13:28'),
(49, 'Icon', 'i', 'i-id', 'i', 0, '2018-09-01 14:30:32'),
(50, 'Container Fluid', 'div', 'container-fluid-id', 'container-fluid', 0, '2018-09-03 16:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `achi_email`
--

CREATE TABLE `achi_email` (
  `email_id` int(11) NOT NULL,
  `email_name` varchar(255) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `email_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `achi_gift`
--

CREATE TABLE `achi_gift` (
  `gift_id` int(11) NOT NULL,
  `gift_name` varchar(255) NOT NULL,
  `gift_uri_file` varchar(255) NOT NULL,
  `gift_promo` text NOT NULL,
  `gift_cover` varchar(255) NOT NULL,
  `gift_active` tinyint(1) NOT NULL,
  `gift_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_gift`
--

INSERT INTO `achi_gift` (`gift_id`, `gift_name`, `gift_uri_file`, `gift_promo`, `gift_cover`, `gift_active`, `gift_created_date`) VALUES
(1, 'Sách kỹ năng tự tin', 'http://localhost:8080/Achi/admin/gift/add', '<h1><span style=\"text-decoration: line-through; color: rgb(255, 204, 0);\" data-mce-style=\"text-decoration: line-through; color: #ffcc00;\"><em><strong>Sách kỹ năng tự tin</strong></em></span></h1>', 'http://localhost:8080/Achi/api/uploads/images/7164367e6a852b10ded3.jpg', 0, '2018-09-09 17:41:40');

-- --------------------------------------------------------

--
-- Table structure for table `achi_menu`
--

CREATE TABLE `achi_menu` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(255) NOT NULL,
  `menu_alias` varchar(255) NOT NULL,
  `menu_uri` text,
  `menu_icon` varchar(255) DEFAULT NULL,
  `menu_parent_id` int(11) NOT NULL,
  `menu_status` tinyint(1) NOT NULL DEFAULT '0',
  `menu_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `achi_rule_user`
--

CREATE TABLE `achi_rule_user` (
  `rule_user_id` int(11) NOT NULL,
  `rule_user_name` varchar(255) NOT NULL,
  `rule_user_alias` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `achi_source`
--

CREATE TABLE `achi_source` (
  `source_id` int(11) NOT NULL,
  `source_title` varchar(255) NOT NULL,
  `source_alias` varchar(255) NOT NULL,
  `source_promo` text NOT NULL,
  `source_content` text,
  `source_cover` varchar(255) NOT NULL,
  `source_id_ui` int(11) NOT NULL,
  `source_status` tinyint(1) NOT NULL,
  `source_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_source`
--

INSERT INTO `achi_source` (`source_id`, `source_title`, `source_alias`, `source_promo`, `source_content`, `source_cover`, `source_id_ui`, `source_status`, `source_created_date`) VALUES
(1, 'Airbnb JavaScript Style Guide', 'airbnb-javascript-style-guide', 'A mostly reasonable approach to JavaScript', '<h1 id=\"airbnb-javascript-style-guide-\">Airbnb JavaScript Style Guide() {</h1><p><em>A mostly reasonable approach to JavaScript</em></p><blockquote><p><strong>Note</strong>: this guide assumes you are using&nbsp;<a href=\"https://babeljs.io/\" data-mce-href=\"https://babeljs.io/\">Babel</a>, and requires that you use&nbsp;<a href=\"https://npmjs.com/babel-preset-airbnb\" data-mce-href=\"https://npmjs.com/babel-preset-airbnb\">babel-preset-airbnb</a>&nbsp;or the equivalent. It also assumes you are installing shims/polyfills in your app, with&nbsp;<a href=\"https://npmjs.com/airbnb-browser-shims\" data-mce-href=\"https://npmjs.com/airbnb-browser-shims\">airbnb-browser-shims</a>&nbsp;or the equivalent.</p></blockquote><p><a href=\"https://www.npmjs.com/package/eslint-config-airbnb\" data-mce-href=\"https://www.npmjs.com/package/eslint-config-airbnb\"><img style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\" src=\"https://img.shields.io/npm/dm/eslint-config-airbnb.svg\" alt=\"Downloads\" data-mce-src=\"https://img.shields.io/npm/dm/eslint-config-airbnb.svg\" data-mce-style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\"></a>&nbsp;<a href=\"https://www.npmjs.com/package/eslint-config-airbnb-base\" data-mce-href=\"https://www.npmjs.com/package/eslint-config-airbnb-base\"><img style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\" src=\"https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg\" alt=\"Downloads\" data-mce-src=\"https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg\" data-mce-style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\"></a>&nbsp;<a href=\"https://gitter.im/airbnb/javascript?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge\" data-mce-href=\"https://gitter.im/airbnb/javascript?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge\"><img style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\" src=\"https://badges.gitter.im/Join%20Chat.svg\" alt=\"Gitter\" data-mce-src=\"https://badges.gitter.im/Join%20Chat.svg\" data-mce-style=\"border-width: 0px; border-image-width: initial; max-width: 100%;\"></a></p><p>This guide is available in other languages too. See&nbsp;<a href=\"http://airbnb.io/javascript/#translation\" data-mce-href=\"http://airbnb.io/javascript/#translation\">Translation</a></p><p>Other Style Guides</p><ul><li><a href=\"https://github.com/airbnb/javascript/tree/es5-deprecated/es5\" data-mce-href=\"https://github.com/airbnb/javascript/tree/es5-deprecated/es5\">ES5 (Deprecated)</a></li><li><a href=\"http://airbnb.io/javascript/react/\" data-mce-href=\"http://airbnb.io/javascript/react/\">React</a></li><li><a href=\"http://airbnb.io/javascript/css-in-javascript/\" data-mce-href=\"http://airbnb.io/javascript/css-in-javascript/\">CSS-in-JavaScript</a></li><li><a href=\"https://github.com/airbnb/css\" data-mce-href=\"https://github.com/airbnb/css\">CSS &amp; Sass</a></li><li><a href=\"https://github.com/airbnb/ruby\" data-mce-href=\"https://github.com/airbnb/ruby\">Ruby</a></li></ul><h2 id=\"table-of-contents\">Table of Contents</h2><ol><li><a href=\"http://airbnb.io/javascript/#types\" data-mce-href=\"http://airbnb.io/javascript/#types\">Types</a></li><li><a href=\"http://airbnb.io/javascript/#references\" data-mce-href=\"http://airbnb.io/javascript/#references\">References</a></li><li><a href=\"http://airbnb.io/javascript/#objects\" data-mce-href=\"http://airbnb.io/javascript/#objects\">Objects</a></li><li><a href=\"http://airbnb.io/javascript/#arrays\" data-mce-href=\"http://airbnb.io/javascript/#arrays\">Arrays</a></li><li><a href=\"http://airbnb.io/javascript/#destructuring\" data-mce-href=\"http://airbnb.io/javascript/#destructuring\">Destructuring</a></li><li><a href=\"http://airbnb.io/javascript/#strings\" data-mce-href=\"http://airbnb.io/javascript/#strings\">Strings</a></li><li><a href=\"http://airbnb.io/javascript/#functions\" data-mce-href=\"http://airbnb.io/javascript/#functions\">Functions</a></li><li><a href=\"http://airbnb.io/javascript/#arrow-functions\" data-mce-href=\"http://airbnb.io/javascript/#arrow-functions\">Arrow Functions</a></li><li><a href=\"http://airbnb.io/javascript/#classes--constructors\" data-mce-href=\"http://airbnb.io/javascript/#classes--constructors\">Classes &amp; Constructors</a></li><li><a href=\"http://airbnb.io/javascript/#modules\" data-mce-href=\"http://airbnb.io/javascript/#modules\">Modules</a></li><li><a href=\"http://airbnb.io/javascript/#iterators-and-generators\" data-mce-href=\"http://airbnb.io/javascript/#iterators-and-generators\">Iterators and Generators</a></li><li><a href=\"http://airbnb.io/javascript/#properties\" data-mce-href=\"http://airbnb.io/javascript/#properties\">Properties</a></li><li><a href=\"http://airbnb.io/javascript/#variables\" data-mce-href=\"http://airbnb.io/javascript/#variables\">Variables</a></li><li><a href=\"http://airbnb.io/javascript/#hoisting\" data-mce-href=\"http://airbnb.io/javascript/#hoisting\">Hoisting</a></li><li><a href=\"http://airbnb.io/javascript/#comparison-operators--equality\" data-mce-href=\"http://airbnb.io/javascript/#comparison-operators--equality\">Comparison Operators &amp; Equality</a></li><li><a href=\"http://airbnb.io/javascript/#blocks\" data-mce-href=\"http://airbnb.io/javascript/#blocks\">Blocks</a></li><li><a href=\"http://airbnb.io/javascript/#control-statements\" data-mce-href=\"http://airbnb.io/javascript/#control-statements\">Control Statements</a></li><li><a href=\"http://airbnb.io/javascript/#comments\" data-mce-href=\"http://airbnb.io/javascript/#comments\">Comments</a></li><li><a href=\"http://airbnb.io/javascript/#whitespace\" data-mce-href=\"http://airbnb.io/javascript/#whitespace\">Whitespace</a></li><li><a href=\"http://airbnb.io/javascript/#commas\" data-mce-href=\"http://airbnb.io/javascript/#commas\">Commas</a></li><li><a href=\"http://airbnb.io/javascript/#semicolons\" data-mce-href=\"http://airbnb.io/javascript/#semicolons\">Semicolons</a></li><li><a href=\"http://airbnb.io/javascript/#type-casting--coercion\" data-mce-href=\"http://airbnb.io/javascript/#type-casting--coercion\">Type Casting &amp; Coercion</a></li><li><a href=\"http://airbnb.io/javascript/#naming-conventions\" data-mce-href=\"http://airbnb.io/javascript/#naming-conventions\">Naming Conventions</a></li><li><a href=\"http://airbnb.io/javascript/#accessors\" data-mce-href=\"http://airbnb.io/javascript/#accessors\">Accessors</a></li><li><a href=\"http://airbnb.io/javascript/#events\" data-mce-href=\"http://airbnb.io/javascript/#events\">Events</a></li><li><a href=\"http://airbnb.io/javascript/#jquery\" data-mce-href=\"http://airbnb.io/javascript/#jquery\">jQuery</a></li><li><a href=\"http://airbnb.io/javascript/#ecmascript-5-compatibility\" data-mce-href=\"http://airbnb.io/javascript/#ecmascript-5-compatibility\">ECMAScript 5 Compatibility</a></li><li><a href=\"http://airbnb.io/javascript/#ecmascript-6-es-2015-styles\" data-mce-href=\"http://airbnb.io/javascript/#ecmascript-6-es-2015-styles\">ECMAScript 6+ (ES 2015+) Styles</a></li><li><a href=\"http://airbnb.io/javascript/#standard-library\" data-mce-href=\"http://airbnb.io/javascript/#standard-library\">Standard Library</a></li><li><a href=\"http://airbnb.io/javascript/#testing\" data-mce-href=\"http://airbnb.io/javascript/#testing\">Testing</a></li><li><a href=\"http://airbnb.io/javascript/#performance\" data-mce-href=\"http://airbnb.io/javascript/#performance\">Performance</a></li><li><a href=\"http://airbnb.io/javascript/#resources\" data-mce-href=\"http://airbnb.io/javascript/#resources\">Resources</a></li><li><a href=\"http://airbnb.io/javascript/#in-the-wild\" data-mce-href=\"http://airbnb.io/javascript/#in-the-wild\">In the Wild</a></li><li><a href=\"http://airbnb.io/javascript/#translation\" data-mce-href=\"http://airbnb.io/javascript/#translation\">Translation</a></li><li><a href=\"http://airbnb.io/javascript/#the-javascript-style-guide-guide\" data-mce-href=\"http://airbnb.io/javascript/#the-javascript-style-guide-guide\">The JavaScript Style Guide Guide</a></li><li><a href=\"http://airbnb.io/javascript/#chat-with-us-about-javascript\" data-mce-href=\"http://airbnb.io/javascript/#chat-with-us-about-javascript\">Chat With Us About JavaScript</a></li><li><a href=\"http://airbnb.io/javascript/#contributors\" data-mce-href=\"http://airbnb.io/javascript/#contributors\">Contributors</a></li><li><a href=\"http://airbnb.io/javascript/#license\" data-mce-href=\"http://airbnb.io/javascript/#license\">License</a></li><li><a href=\"http://airbnb.io/javascript/#amendments\" data-mce-href=\"http://airbnb.io/javascript/#amendments\">Amendments</a></li></ol>', 'http://localhost:8080/Achi/api/uploads/images/9d6cc0e724414edaef38.png', 1, 0, '2018-08-31 03:10:17'),
(2, 'NOT IN vs. NOT EXISTS vs. LEFT JOIN / IS NULL: SQL Server', 'not-in-vs-not-exists-vs-left-join-is-null-sql-server', 'This series of articles is inspired by multiple questions asked by the site visitors and Stack Overflow users, including Tony, Philip, Rexem and others.', '<p>Which method (NOT IN vs. NOT EXISTS vs. LEFT JOIN / IS NULL) is best to select values present in one table but missing in another one?</p><p>This:</p><div id=\"highlighter_944155\"><div><div><a title=\"view source\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\">view source</a><a title=\"print\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\">print</a><a title=\"?\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\">?</a></div></div><div><div><code>1.</code><code>SELECT</code>&nbsp;&nbsp;<code>l.*</code></div><div><code>2.</code><code>FROM</code>&nbsp;&nbsp;&nbsp;&nbsp;<code>t_left l</code></div><div><code>3.</code><code>LEFT</code>&nbsp;<code>JOIN</code></div><div><code>4.</code><code>t_right r</code></div><div><code>5.</code><code>ON</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>r.value = l.value</code></div><div><code>6.</code><code>WHERE</code>&nbsp;&nbsp;&nbsp;<code>r.value&nbsp;</code><code>IS</code>&nbsp;<code>NULL</code></div></div></div><p>, this:</p><div id=\"highlighter_423984\"><div><div><a title=\"view source\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\">view source</a><a title=\"print\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\">print</a><a title=\"?\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\">?</a></div></div><div><div><code>1.</code><code>SELECT</code>&nbsp;&nbsp;<code>l.*</code></div><div><code>2.</code><code>FROM</code>&nbsp;&nbsp;&nbsp;&nbsp;<code>t_left l</code></div><div><code>3.</code><code>WHERE</code>&nbsp;&nbsp;&nbsp;<code>l.value&nbsp;</code><code>NOT</code>&nbsp;<code>IN</code></div><div><code>4.</code><code>(</code></div><div><code>5.</code><code>SELECT</code>&nbsp;&nbsp;<code>value</code></div><div><code>6.</code><code>FROM</code>&nbsp;&nbsp;&nbsp;&nbsp;<code>t_right r</code></div><div><code>7.</code><code>)</code></div></div></div><p>or this:</p><div id=\"highlighter_372231\"><div><div><a title=\"view source\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#viewSource\">view source</a><a title=\"print\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#printSource\">print</a><a title=\"?\" href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\" data-mce-href=\"https://explainextended.com/2009/09/15/not-in-vs-not-exists-vs-left-join-is-null-sql-server/#about\">?</a></div></div><div><div><code>1.</code><code>SELECT</code>&nbsp;&nbsp;<code>l.*</code></div><div><code>2.</code><code>FROM</code>&nbsp;&nbsp;&nbsp;&nbsp;<code>t_left l</code></div><div><code>3.</code><code>WHERE</code>&nbsp;&nbsp;&nbsp;<code>NOT</code>&nbsp;<code>EXISTS</code></div><div><code>4.</code><code>(</code></div><div><code>5.</code><code>SELECT</code>&nbsp;&nbsp;<code>NULL</code></div><div><code>6.</code><code>FROM</code>&nbsp;&nbsp;&nbsp;&nbsp;<code>t_right r</code></div><div><code>7.</code><code>WHERE</code>&nbsp;&nbsp;&nbsp;<code>r.value = l.value</code></div><div><code>8.</code><code>)</code></div></div></div>', 'http://localhost:8080/Achi/api/uploads/images/9d6cc0e724414edaef38.png', 1, 0, '2018-09-01 16:43:59');

-- --------------------------------------------------------

--
-- Table structure for table `achi_source_order`
--

CREATE TABLE `achi_source_order` (
  `source_order_id` varchar(255) NOT NULL,
  `source_order_id_source` int(11) NOT NULL,
  `source_order_ten` varchar(255) NOT NULL,
  `source_order_email` varchar(255) NOT NULL,
  `source_order_birthday` varchar(255) NOT NULL,
  `source_order_number_phone` varchar(255) NOT NULL,
  `source_order_ho` varchar(255) NOT NULL,
  `source_order_gender` varchar(255) NOT NULL,
  `source_order_price` int(11) NOT NULL,
  `source_order_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_source_order`
--

INSERT INTO `achi_source_order` (`source_order_id`, `source_order_id_source`, `source_order_ten`, `source_order_email`, `source_order_birthday`, `source_order_number_phone`, `source_order_ho`, `source_order_gender`, `source_order_price`, `source_order_created_date`) VALUES
('fa4346d5df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:23'),
('fa434s5df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:10'),
('fa43d6d5df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:25'),
('fa484s3df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:05'),
('fa484s5df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:08'),
('fa484sdf', 4, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:35:39'),
('fa484sdf3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:02'),
('fa7jAjf8nf', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 13:58:01'),
('fa7jAjs8nf', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 13:58:05'),
('fg43d6d5df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:28'),
('fg43d6df3', 1, 'Hoai Son', 'sonhoai272@gmail.com', '27-02-1996', '0985457865', 'Nguyen', 'Nam', 0, '2018-09-07 17:36:31');

-- --------------------------------------------------------

--
-- Table structure for table `achi_source_sche`
--

CREATE TABLE `achi_source_sche` (
  `source_sche_id` int(11) NOT NULL,
  `source_sche_id_source` int(11) NOT NULL,
  `source_sche_number` int(11) NOT NULL,
  `source_sche_price` int(11) NOT NULL,
  `source_sche_sale` int(11) NOT NULL,
  `source_sche_address` varchar(255) NOT NULL,
  `source_sche_teacher` varchar(255) NOT NULL,
  `source_sche_status` tinyint(1) NOT NULL DEFAULT '0',
  `source_sche_khoa` varchar(255) NOT NULL,
  `source_sche_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_source_sche`
--

INSERT INTO `achi_source_sche` (`source_sche_id`, `source_sche_id_source`, `source_sche_number`, `source_sche_price`, `source_sche_sale`, `source_sche_address`, `source_sche_teacher`, `source_sche_status`, `source_sche_khoa`, `source_sche_created_date`) VALUES
(1, 1, 10, 1500000, 1500000, 'Lê Văn Sĩ', 'Nguyễn Minh Chí', 1, 'Khóa 1', '2018-09-07 16:14:31'),
(2, 1, 202, 2500000, 1000000, 'Lê Văn Sĩ', 'Nguyễn Minh Chí', 1, 'Khóa 2', '2018-09-07 16:14:40'),
(3, 2, 2, 500000, 100000, 'Lê Văn Sĩ', 'Nguyễn Minh Chí', 1, 'Khóa 1', '2018-09-07 16:14:46'),
(4, 2, 13, 122, 122, 'Lê Văn Sĩ', 'Nguyễn Minh Chí', 1, 'Khóa 3', '2018-09-07 16:23:03');

-- --------------------------------------------------------

--
-- Table structure for table `achi_status`
--

CREATE TABLE `achi_status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL,
  `status_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_status`
--

INSERT INTO `achi_status` (`status_id`, `status_name`, `status_created_date`) VALUES
(1, 'Ẩn', '2018-08-18 05:29:51'),
(2, 'Hiện', '2018-08-18 05:29:51'),
(3, 'Kích hoạt', '2018-08-18 05:35:50');

-- --------------------------------------------------------

--
-- Table structure for table `achi_ui`
--

CREATE TABLE `achi_ui` (
  `ui_id` int(11) NOT NULL,
  `ui_name` varchar(255) NOT NULL,
  `ui_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_ui`
--

INSERT INTO `achi_ui` (`ui_id`, `ui_name`, `ui_created_date`) VALUES
(1, 'Style 1', '2018-08-27 15:34:46');

-- --------------------------------------------------------

--
-- Table structure for table `achi_user`
--

CREATE TABLE `achi_user` (
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_rule_id` int(11) NOT NULL,
  `user_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `achi_video`
--

CREATE TABLE `achi_video` (
  `video_id` int(11) NOT NULL,
  `video_name` varchar(255) NOT NULL,
  `video_uri` text NOT NULL,
  `video_cover` varchar(255) NOT NULL,
  `video_status` tinyint(1) NOT NULL DEFAULT '0',
  `video_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `achi_video`
--

INSERT INTO `achi_video` (`video_id`, `video_name`, `video_uri`, `video_cover`, `video_status`, `video_created_date`) VALUES
(1, 'NOCLOGO', 'https://www.youtube.com/watch?v=cVpnZ_qgz6o', 'http://localhost:8080/Achi/api/uploads/images/de3d3a98ababd291a0891536357600000.jpg', 0, '2018-09-09 09:17:09'),
(2, 'NOCLOGO', 'https://www.youtube.com/watch?v=cVpnZ_qgz6o', 'http://localhost:8080/Achi/api/uploads/images/de3d3a98ababd291a0891536357600000.jpg', 0, '2018-09-09 09:21:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achi_author`
--
ALTER TABLE `achi_author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `achi_blog`
--
ALTER TABLE `achi_blog`
  ADD PRIMARY KEY (`blog_id`),
  ADD KEY `blog_id_auth` (`blog_id_author`),
  ADD KEY `blog_id_category` (`blog_id_category`),
  ADD KEY `blog_id_status` (`blog_id_status`);

--
-- Indexes for table `achi_category`
--
ALTER TABLE `achi_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `achi_content_element`
--
ALTER TABLE `achi_content_element`
  ADD PRIMARY KEY (`content_element_id`),
  ADD KEY `achi_content_element_ibfk_1` (`content_element_id_detail_ui`),
  ADD KEY `content_element_id_source` (`content_element_id_source`);

--
-- Indexes for table `achi_date_source`
--
ALTER TABLE `achi_date_source`
  ADD PRIMARY KEY (`date_source_id`),
  ADD KEY `date_source_id_sche` (`date_source_id_sche`);

--
-- Indexes for table `achi_detail_ui`
--
ALTER TABLE `achi_detail_ui`
  ADD PRIMARY KEY (`detail_ui_id`),
  ADD KEY `detail_ui_id_element` (`detail_ui_id_element`),
  ADD KEY `detail_ui_id_ui` (`detail_ui_id_ui`),
  ADD KEY `detail_ui_parent_id` (`detail_ui_parent_id`);

--
-- Indexes for table `achi_element`
--
ALTER TABLE `achi_element`
  ADD PRIMARY KEY (`element_id`);

--
-- Indexes for table `achi_email`
--
ALTER TABLE `achi_email`
  ADD PRIMARY KEY (`email_id`);

--
-- Indexes for table `achi_gift`
--
ALTER TABLE `achi_gift`
  ADD PRIMARY KEY (`gift_id`);

--
-- Indexes for table `achi_menu`
--
ALTER TABLE `achi_menu`
  ADD PRIMARY KEY (`menu_id`),
  ADD KEY `menu_parent_id` (`menu_parent_id`);

--
-- Indexes for table `achi_rule_user`
--
ALTER TABLE `achi_rule_user`
  ADD PRIMARY KEY (`rule_user_id`);

--
-- Indexes for table `achi_source`
--
ALTER TABLE `achi_source`
  ADD PRIMARY KEY (`source_id`),
  ADD KEY `source_id_ui` (`source_id_ui`);

--
-- Indexes for table `achi_source_order`
--
ALTER TABLE `achi_source_order`
  ADD PRIMARY KEY (`source_order_id`),
  ADD KEY `source_order_id_source` (`source_order_id_source`);

--
-- Indexes for table `achi_source_sche`
--
ALTER TABLE `achi_source_sche`
  ADD PRIMARY KEY (`source_sche_id`),
  ADD KEY `source_sche_id_source` (`source_sche_id_source`);

--
-- Indexes for table `achi_status`
--
ALTER TABLE `achi_status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `achi_ui`
--
ALTER TABLE `achi_ui`
  ADD PRIMARY KEY (`ui_id`);

--
-- Indexes for table `achi_user`
--
ALTER TABLE `achi_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `achi_video`
--
ALTER TABLE `achi_video`
  ADD PRIMARY KEY (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achi_author`
--
ALTER TABLE `achi_author`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `achi_category`
--
ALTER TABLE `achi_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `achi_content_element`
--
ALTER TABLE `achi_content_element`
  MODIFY `content_element_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `achi_date_source`
--
ALTER TABLE `achi_date_source`
  MODIFY `date_source_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `achi_detail_ui`
--
ALTER TABLE `achi_detail_ui`
  MODIFY `detail_ui_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=223;

--
-- AUTO_INCREMENT for table `achi_element`
--
ALTER TABLE `achi_element`
  MODIFY `element_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `achi_email`
--
ALTER TABLE `achi_email`
  MODIFY `email_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `achi_gift`
--
ALTER TABLE `achi_gift`
  MODIFY `gift_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `achi_menu`
--
ALTER TABLE `achi_menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `achi_rule_user`
--
ALTER TABLE `achi_rule_user`
  MODIFY `rule_user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `achi_source`
--
ALTER TABLE `achi_source`
  MODIFY `source_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `achi_source_sche`
--
ALTER TABLE `achi_source_sche`
  MODIFY `source_sche_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `achi_status`
--
ALTER TABLE `achi_status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `achi_ui`
--
ALTER TABLE `achi_ui`
  MODIFY `ui_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `achi_video`
--
ALTER TABLE `achi_video`
  MODIFY `video_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `achi_blog`
--
ALTER TABLE `achi_blog`
  ADD CONSTRAINT `achi_blog_ibfk_1` FOREIGN KEY (`blog_id_author`) REFERENCES `achi_author` (`author_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `achi_blog_ibfk_2` FOREIGN KEY (`blog_id_category`) REFERENCES `achi_category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `achi_blog_ibfk_3` FOREIGN KEY (`blog_id_status`) REFERENCES `achi_status` (`status_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `achi_content_element`
--
ALTER TABLE `achi_content_element`
  ADD CONSTRAINT `achi_content_element_ibfk_1` FOREIGN KEY (`content_element_id_detail_ui`) REFERENCES `achi_detail_ui` (`detail_ui_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `achi_content_element_ibfk_2` FOREIGN KEY (`content_element_id_source`) REFERENCES `achi_source` (`source_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `achi_date_source`
--
ALTER TABLE `achi_date_source`
  ADD CONSTRAINT `achi_date_source_ibfk_1` FOREIGN KEY (`date_source_id_sche`) REFERENCES `achi_source_sche` (`source_sche_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `achi_detail_ui`
--
ALTER TABLE `achi_detail_ui`
  ADD CONSTRAINT `achi_detail_ui_ibfk_1` FOREIGN KEY (`detail_ui_id_element`) REFERENCES `achi_element` (`element_id`),
  ADD CONSTRAINT `achi_detail_ui_ibfk_3` FOREIGN KEY (`detail_ui_parent_id`) REFERENCES `achi_detail_ui` (`detail_ui_id`),
  ADD CONSTRAINT `achi_detail_ui_ibfk_4` FOREIGN KEY (`detail_ui_id_ui`) REFERENCES `achi_ui` (`ui_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `achi_menu`
--
ALTER TABLE `achi_menu`
  ADD CONSTRAINT `achi_menu_ibfk_1` FOREIGN KEY (`menu_parent_id`) REFERENCES `achi_menu` (`menu_id`);

--
-- Constraints for table `achi_source`
--
ALTER TABLE `achi_source`
  ADD CONSTRAINT `achi_source_ibfk_1` FOREIGN KEY (`source_id_ui`) REFERENCES `achi_ui` (`ui_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `achi_source_order`
--
ALTER TABLE `achi_source_order`
  ADD CONSTRAINT `achi_source_order_ibfk_1` FOREIGN KEY (`source_order_id_source`) REFERENCES `achi_source_sche` (`source_sche_id`);

--
-- Constraints for table `achi_source_sche`
--
ALTER TABLE `achi_source_sche`
  ADD CONSTRAINT `achi_source_sche_ibfk_1` FOREIGN KEY (`source_sche_id_source`) REFERENCES `achi_source` (`source_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
