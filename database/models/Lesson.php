<?php
    class Lesson {
        private $Id;
        private $OrderNumber;
        private $Title;
        private $IsSeparator;
        private $CourseId;

        public function __construct($Id, $OrderNumber, $Title, $IsSeparator, $CourseId) {
            $this->Id = $Id;
            $this->OrderNumber = $OrderNumber;
            $this->Title = $Title;
            $this->IsSeparator = $IsSeparator;
            $this->CourseId = $CourseId;
        }

        public function getId() { return $this->Id; }
        public function getOrderNumber() { return $this->OrderNumber; }
        public function getTitle() { return $this->Title; }
        public function getIsSeparator() { return $this->IsSeparator; }
        public function getCourseId() { return $this->CourseId; }

        public function setId($Id) { $this->Id = $Id; }
        public function setOrderNumber($OrderNumber) { $this->OrderNumber = $OrderNumber; }
        public function setTitle($Title) { $this->Title = $Title; }
        public function setIsSeparator($IsSeparator) { $this->IsSeparator = $IsSeparator; }
        public function setCourseId($CourseId) { $this->CourseId = $CourseId; }

        public function __toJSON() { return '{ "Id": '.$this->Id.', "OrderNumber": '.$this->OrderNumber.', "Title": "'.$this->Title.'", "IsSeparator": '.$this->IsSeparator.', "CourseId": '.$this->CourseId.' }'; }
    }
?>