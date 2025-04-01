import React from 'react';
import Title from '../components/Title';
import aboutImage from '../assets/about_us.jpg';
import { highlightText } from '../utils/highlightText';
import NewLetterBox from '../components/NewLetterBox';

const About = () => {
    const paragraph1 = `Chào mừng bạn đến với Nowhere.SG, nơi mà sự đơn giản không bao giờ đơn điệu. Chúng tôi tin rằng
  sự tự tin bắt đầu từ những điều nhỏ nhặt nhất – như một chiếc áo vừa vặn, một chiếc quần thoải
  mái. Chúng tôi mang đến những thiết kế basic nhưng đầy đủ cá tính, giúp bạn tự do thể hiện phong
  cách riêng mà không cần phải làm màu.`;

    const paragraph2 = `Không có gì phức tạp, chỉ có sự tinh tế trong từng đường nét. Mỗi món đồ của chúng tôi không chỉ
  là trang phục "Wear your confidence" – tự tin, đơn giản nhưng không hề giản đơn Với Nowhere.SG,
  bạn không chỉ mặc đồ – bạn mặc sự tự tin, mặc sự thoải mái và mặc chính bạn. Bởi vì khi bạn tự
  tin, bạn chính là người định nghĩa phong cách của mình`;

    const paragraph3 = `Chúng tôi cam kết mang đến những thiết kế đơn giản nhưng tinh tế, giúp bạn thể hiện phong cách
    riêng và khẳng định sự tự tin trong từng khoảnh khắc. Với phương châm "Wear your confidence",
    mỗi sản phẩm của chúng tôi không chỉ là trang phục mà còn là biểu hiện của chính bạn.`;

    const paragraph4 = `Mua sắm tại Nowhere.SG thật dễ dàng và nhanh chóng. Chúng tôi cung cấp nền tảng trực tuyến thân thiện, giúp bạn tìm kiếm và đặt hàng chỉ trong vài cú nhấp chuột. Chính sách đổi trả linh hoạt và dịch vụ giao hàng nhanh chóng giúp bạn yên tâm mua sắm mà không cần lo lắng về việc trả hàng hoặc chờ đợi.`;
    const paragraph5 = `Chúng tôi luôn đặt khách hàng lên hàng đầu. Đội ngũ hỗ trợ tận tâm của Nowhere.SG sẵn sàng giải đáp mọi thắc mắc và xử lý yêu cầu của bạn một cách nhanh chóng. Dù là tư vấn sản phẩm, hỗ trợ đổi trả hay bất kỳ vấn đề nào khác, chúng tôi cam kết mang đến trải nghiệm mua sắm suôn sẻ và hài lòng nhất.`;
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title secondaryText={`ABOUT`} primaryText={`US`} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={aboutImage} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>{highlightText(paragraph1)}</p>
                    <p>{highlightText(paragraph2)}</p>
                    <b className="text-red-800">Sứ Mệnh Nâng Tầm Sự Tự Tin</b>
                    <p>{highlightText(paragraph3)} </p>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Title secondaryText={`WHY`} primaryText={`CHOOSE US`} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance: </b>
                    <p className="text-gray-600">
                        Chúng tôi cam kết mang đến sản phẩm với chất lượng cao nhất, từ chất liệu vải bền bỉ, mềm mại
                        đến đường may tinh tế. Mỗi sản phẩm đều trải qua quá trình kiểm định nghiêm ngặt trước khi đến
                        tay bạn, đảm bảo sự thoải mái và độ bền lâu dài.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience: </b>
                    <p className="text-gray-600">{highlightText(paragraph4)}</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service: </b>
                    <p className="text-gray-600">{highlightText(paragraph5)}</p>
                </div>
            </div>
            <NewLetterBox />
        </div>
    );
};

export default About;
