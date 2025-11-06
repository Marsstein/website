import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Monitor } from 'lucide-react';
import { getEmailJS } from '@/utils/lazyImports';
import { SimpleCalendlySection } from '@/components/zh/SimpleCalendlySection';

interface ContactFormProps {
  isDemoRequest?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isDemoRequest = false }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    employees: '',
    message: isDemoRequest ? '我想申请您的合规管理平台演示。' : '',
    newsletter: false,
    privacy: false,
    isDemoRequest: isDemoRequest
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 30000) {
      toast({
        title: '错误',
        description: '请等待30秒后再次提交。',
        variant: "destructive",
      });
      return;
    }

    if (!formData.privacy) {
      toast({
        title: '错误',
        description: '请接受隐私政策。',
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS配置缺失。请检查您的.env.local文件。');
      }

      const emailjs = await getEmailJS();
      emailjs.init(publicKey);

      const sanitizedData = {
        firstName: formData.firstName.trim().slice(0, 50),
        lastName: formData.lastName.trim().slice(0, 50),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim().slice(0, 20),
        company: formData.company.trim().slice(0, 100),
        jobTitle: formData.jobTitle.trim().slice(0, 100),
        employees: formData.employees,
        message: formData.message.trim().slice(0, 2000),
        isDemoRequest: formData.isDemoRequest,
        newsletter: formData.newsletter
      };

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        toast({
          title: '错误',
          description: '请输入有效的电子邮件地址。',
          variant: "destructive",
        });
        return;
      }

      const templateParams = {
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: sanitizedData.email,
        message: `
联系详情:
- 姓名: ${sanitizedData.firstName} ${sanitizedData.lastName}
- 邮箱: ${sanitizedData.email}
- 电话: ${sanitizedData.phone}
- 公司: ${sanitizedData.company}
- 职位: ${sanitizedData.jobTitle}
- 员工数: ${sanitizedData.employees}
- 演示请求: ${sanitizedData.isDemoRequest ? '是' : '否'}
- 订阅通讯: ${sanitizedData.newsletter ? '是' : '否'}

消息:
${sanitizedData.message}
        `,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: '成功！',
        description: '您的消息已发送。我们会尽快回复您。',
      });

      setLastSubmissionTime(Date.now());

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        employees: '',
        message: '',
        newsletter: false,
        privacy: false,
        isDemoRequest: false
      });

      setTimeout(() => {
        navigate('/zh/xiexie');
      }, 1500);

    } catch (error) {
      const errorMessage = '发送失败。请重试或直接联系我们。';

      toast({
        title: '错误',
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Info */}
        <div>
          {isDemoRequest && (
            <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-primary font-medium flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                演示请求 - 获取我们平台的个性化演示
              </p>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {isDemoRequest ? '申请您的个人演示' : '联系我们'}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {isDemoRequest ? '填写下面的表格，我们将为您安排合规管理平台的个性化演示。' : '有问题或需要更多信息？请联系我们的团队。'}
          </p>

          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">为什么选择Marsstein？</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">AI驱动的自动化</p>
                  <p className="text-muted-foreground text-sm">将合规时间减少95%</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">欧盟数据保护</p>
                  <p className="text-muted-foreground text-sm">您的数据留在欧洲</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">专家支持</p>
                  <p className="text-muted-foreground text-sm">我们的团队随时为您服务</p>
                </div>
              </div>
            </div>
          </div>

          <SimpleCalendlySection />

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>info@marsstein.ai</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>德国慕尼黑</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span>周一至周五，9:00-18:00（欧洲中部时间）</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">联系表单</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">
                  名字 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="张"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium">
                  姓氏 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="三"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  电子邮件 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="zhang@company.com"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  电话
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+86 XXX XXXX XXXX"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">公司信息</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    公司 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="示例公司"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    职位
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    placeholder="总经理"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="employees" className="text-sm font-medium">
                  员工数量
                </Label>
                <Select onValueChange={(value) => handleInputChange('employees', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="选择员工数量" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                消息
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="您想告诉我们什么？"
                className="mt-1 min-h-[100px]"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                />
                <Label htmlFor="newsletter" className="text-sm leading-5">
                  我想接收有关合规更新和Marsstein新闻的通讯。
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                  required
                />
                <Label htmlFor="privacy" className="text-sm leading-5">
                  我已阅读并接受隐私政策。 <span className="text-destructive">*</span>
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? '发送中...' : '发送消息'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
